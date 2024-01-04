// home page
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export const App = createBrowserRouter([
  //! /* ----------------------------- Main routes ----------------------------- */
  {
    path: "/",
    element: <HomePage />,
  },
]);
