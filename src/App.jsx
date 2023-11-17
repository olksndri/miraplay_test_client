import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { selectIsLoading } from "./redux/games/selectors";
import { Homepage } from "./pages/Homepage/Homepage";
import { Authorization } from "./pages/Authorization/Authorization";
import { Games } from "./pages/Games/Games";
import { NotFound } from "./components/NotFound/NotFound";

export const App = () => {
  const isRefresh = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isRefresh || isLoading) {
      Loading.standard("Loading...", {
        fontFamily: "Neue Machina",
        svgColor: "var(--main-green-color)",
      });
    } else {
      Loading.remove();
    }
  }, [isRefresh, isLoading]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="authorization" element={<Authorization />} />
        <Route path="games_lib" element={<Games />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
