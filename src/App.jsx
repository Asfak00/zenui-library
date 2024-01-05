// react router dom
import { createBrowserRouter } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// overview page
import Overview from "./Components/Overview/SidebarContent/Content/Overview";
import Usage from "./Components/Overview/SidebarContent/Content/Usage";
import Faq from "./Components/Overview/SidebarContent/Content/Faq";
import Templete from "./Components/Overview/SidebarContent/Content/Templete";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/getting-started",
    element: <ComponentsPage />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/usage",
    element: <Usage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/templates",
    element: <Templete />,
  },
]);
