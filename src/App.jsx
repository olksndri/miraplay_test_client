import { Route, Routes } from "react-router-dom";
import { Authorization } from "./pages/Authorization/Authorization";
import { Homepage } from "./pages/Homepage/Homepage";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Games } from "./pages/Games/Games";

export const App = () => {
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (isRefresh) {
      Loading.standard("Loading...", {
        fontFamily: "Neue Machina",
        svgColor: "var(--main-green-color)",
      });
    } else {
      Loading.remove();
    }
  }, [isRefresh]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="authorization" element={<Authorization />} />
        <Route path="games_lib" element={<Games />} />
      </Route>
    </Routes>
  );
};
