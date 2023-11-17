import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Game } from "../Game/Game";
import { List, LoadMoreBtn } from "./GamesList.styled";
import { getGames } from "../../redux/games/operations";
import {
  getGamesPending,
  getGamesFulfilled,
  getGamesRejected,
} from "../../redux/games/gamesSlice";
import { selectGames, selectGenre } from "../../redux/games/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const gamesToShow = 9;
const isFreshGamesFirst = true;

export const GamesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const genre = useSelector(selectGenre);
  const games = useSelector(selectGames);

  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(1);

  const body = {
    page,
    gamesToShow,
    isFreshGamesFirst,
    genre: genre === "ALL" ? false : genre,
  };

  const { data, error, refetch } = useQuery({
    queryKey: [getGames, body],
    queryFn: () => {
      dispatch(getGamesPending());
      return getGames(body);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setPages(Math.ceil(data.gamesListLength / gamesToShow));
      const gamesArr = data.games.map((el) => {
        return {
          _id: el._id,
          title: el.commonGameName,
          description: el.gameDescription,
          imageSrc: el.gameImage,
          launchers: el.gameLaunchers,
          genre: el.genre,
          isTop: el.inTop,
          isFree: el.gameClass !== "VIP",
        };
      });

      dispatch(
        getGamesFulfilled({
          games: gamesArr.slice(0 - gamesToShow),
          toClear: false,
        })
      );
    }
    if (error) {
      dispatch(getGamesRejected(error));
    }
  }, [data, error, dispatch]);

  useEffect(() => {
    dispatch(getGamesFulfilled({ games: [], toClear: true }));
    queryClient.clear();
    setPage(1);
    refetch();
  }, [genre, queryClient, dispatch, refetch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/authorization");
    }
  }, [isLoggedIn, navigate]);

  const renderGames = () => {
    return games.map((el) => <Game key={el._id} props={{ ...el }}></Game>);
  };
  const loadMoreHandler = (e) => {
    setPage(page + 1);
    refetch();
  };

  return (
    <>
      <List>{renderGames()}</List>
      {pages !== page && games.length !== 0 ? (
        <LoadMoreBtn onClick={loadMoreHandler}>Показати ще</LoadMoreBtn>
      ) : (
        <></>
      )}
    </>
  );
};
