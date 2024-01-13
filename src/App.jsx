import React from "react";

// react router dom
import { Route, Router, Routes } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// overview page
import OverviewPage from "./Pages/OverviewPage";
import UsagesPage from "./Pages/UsagesPage";
import FaqPage from "./Pages/FaqPage";
import TempletePage from "./Pages/TempletePage";

const App = () => {
  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getting-started" element={<ComponentsPage />} />
        <Route path="/getting-started/overview" element={<OverviewPage />} />
        <Route path="/getting-started/usage" element={<UsagesPage />} />
        <Route path="/getting-started/faq" element={<FaqPage />} />
        <Route path="/getting-started/templates" element={<TempletePage />} />
      </Routes>
    </>
  );
};

export default App;
