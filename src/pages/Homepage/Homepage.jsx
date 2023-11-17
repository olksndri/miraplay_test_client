import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import {
  refreshUserFulfilled,
  refreshUserPending,
  refreshUserRejected,
} from "../../redux/auth/slice";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectToken } from "../../redux/auth/selectors";

export const Homepage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const persistedToken = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: result,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["auth", persistedToken],
    queryFn: () => {
      dispatch(refreshUserPending());
      return refreshUser(persistedToken);
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (result) {
      dispatch(refreshUserFulfilled(result.user.email));
      navigate("games_lib");
    } else if (isError) {
      dispatch(refreshUserRejected());
      navigate("authorization");
    }
  }, [dispatch, isLoggedIn, result, isError, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    } else {
      navigate("authorization");
    }
  }, [isLoggedIn, refetch, navigate]);

  return <></>;
};
