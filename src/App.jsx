import React from "react";

// react router dom
import { Route, Router, Routes } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// documentation page
import OverviewPage from "./Pages/OverviewPage";
import UsagesPage from "./Pages/UsagesPage";
import FaqPage from "./Pages/FaqPage";
import TempletePage from "./Pages/TempletePage";

// buttons components
import NormalPage from "./Pages/Components/Buttons/NormalPage";
import RgbButtonPage from "./Pages/Components/Buttons/RgbButtonPage";
import AllComponentsPage from "./Pages/Components/AllComponentsPage";
import TabsPage from "./Pages/Components/Navigation/TabsPage";
import SkeletonPage from "./Pages/Components/Feedback/SkeletonPage";

const App = () => {
  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* documentation */}
        <Route path="/getting-started" element={<ComponentsPage />} />
        <Route path="/getting-started/overview" element={<OverviewPage />} />
        <Route path="/getting-started/usage" element={<UsagesPage />} />
        <Route path="/getting-started/faq" element={<FaqPage />} />
        <Route path="/getting-started/templates" element={<TempletePage />} />

        {/* components */}
        {/* buttons */}
        <Route
          path="/components/all-components"
          element={<AllComponentsPage />}
        />
        <Route path="/components/normal-button" element={<NormalPage />} />
        <Route path="/components/rgb-border" element={<RgbButtonPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/skeleton" element={<SkeletonPage />} />
      </Routes>
    </>
  );
};

export default App;
