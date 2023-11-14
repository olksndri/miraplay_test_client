import { Route, Routes } from "react-router-dom";
import { Authorization } from "./pages/Authorization/Authorization";

export const App = () => {
  return (
    <Routes>
      <Route path="/authorization" element={<Authorization />}></Route>
    </Routes>
  );
};
