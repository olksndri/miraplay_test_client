import { GamesList } from "../../components/GamesList/GamesList";
import {
  AllGamesWrap,
  AllGamesTitle,
  GenreList,
  GenreItem,
} from "./Games.styled";
import { selectGenre } from "../../redux/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../../redux/games/genreSlice";

export const Games = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(selectGenre);

  const genreClickHandler = (e) => {
    if (e.target.hasAttribute("id")) {
      const item = e.target;
      const id = item.getAttribute("id");
      dispatch(setGenre(id));
    }
  };

  return (
    <>
      <AllGamesWrap>
        <AllGamesTitle>Всі ігри</AllGamesTitle>
        <GenreList onClick={genreClickHandler}>
          <GenreItem $selected={selectedGenre === "ALL"} id="ALL">
            Всі
          </GenreItem>
          <GenreItem $selected={selectedGenre === "FREE"} id="FREE">
            Безкоштовні
          </GenreItem>
          <GenreItem $selected={selectedGenre === "MOBA"} id="MOBA">
            Мова
          </GenreItem>
          <GenreItem $selected={selectedGenre === "SHOOTERS"} id="SHOOTERS">
            Шутери
          </GenreItem>
          <GenreItem $selected={selectedGenre === "LAUNCHERS"} id="LAUNCHERS">
            Лаунчери
          </GenreItem>
          <GenreItem $selected={selectedGenre === "MMORPG"} id="MMORPG">
            MMORPG
          </GenreItem>
          <GenreItem $selected={selectedGenre === "STRATEGY"} id="STRATEGY">
            Стратегії
          </GenreItem>
          <GenreItem $selected={selectedGenre === "FIGHTING"} id="FIGHTING">
            Файтинг
          </GenreItem>
          <GenreItem $selected={selectedGenre === "RACING"} id="RACING">
            Гонки
          </GenreItem>
          <GenreItem $selected={selectedGenre === "SURVIVAL"} id="SURVIVAL">
            Виживання
          </GenreItem>
          <GenreItem $selected={selectedGenre === "ONLINE"} id="ONLINE">
            Онлайн
          </GenreItem>
        </GenreList>
      </AllGamesWrap>
      <GamesList></GamesList>
    </>
  );
};
