import { Route, Routes } from "react-router-dom";
import { Authorization } from "./pages/Authorization/Authorization";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Authorization />}></Route>
    </Routes>
  );
};
