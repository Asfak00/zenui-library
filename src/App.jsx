import React from "react";

// react router dom
import { Route, Router, Routes } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// documentation page
import OverviewPage from "./Pages/OverviewPage";
import FaqPage from "./Pages/FaqPage";
import TempletePage from "./Pages/TempletePage";

// inputs
import InputTextPage from "./Pages/Components/Inputs/InputTextPage";
import InputTextareaPage from "./Pages/Components/Inputs/InputTextareaPage";
import InputRadioPage from "./Pages/Components/Inputs/InputRadioPage";
import InputSwitchPage from "./Pages/Components/Inputs/InputSwitchPage";
import InputSelectPage from "./Pages/Components/Inputs/InputSelectPage";
import InputFilePage from "./Pages/Components/Inputs/InputFilePage";

// buttons pages
import NormalPage from "./Pages/Components/Buttons/NormalPage";
import RgbButtonPage from "./Pages/Components/Buttons/RgbButtonPage";
import AnimatedButtonPage from "./Pages/Components/Buttons/AnimatedButtonPage";

// all components
import AllComponentsPage from "./Pages/Components/AllComponentsPage";

// navigation pages
import DropDownPage from "./Pages/Components/Navigation/DropDownPage";
import PaginationPage from "./Pages/Components/Navigation/PaginationPage";
import TabsPage from "./Pages/Components/Navigation/TabsPage";
import ModalPage from "./Pages/Components/Navigation/ModalPage";
import ChipPage from "./Pages/Components/Navigation/ChipPage";

// feedback pages
import SkeletonPage from "./Pages/Components/Feedback/SkeletonPage";
import AlertMessagePage from "./Pages/Components/Feedback/AlertMessagePage";
import DialogPage from "./Pages/Components/Feedback/DialogPage";
import TestimonialPage from "./Pages/Components/Feedback/TestimonialPage";
import NotificationPage from "./Pages/Components/Feedback/NotificationPage";
import LoaderPage from "./Pages/Components/Feedback/LoaderPage";

// data display
import BadgePage from "./Pages/Components/Data Display/BadgePage";
import TooltipPage from "./Pages/Components/Data Display/TooltipPage";

// surface pages
import CardPage from "./Pages/Components/Surfaces/CardPage";
import ImageGalleryPage from "./Pages/Components/Surfaces/ImageGalleryPage";
import AccordingPage from "./Pages/Components/Surfaces/AccordingPage";
import AppbarPage from "./Pages/Components/Surfaces/AppbarPage";

// randoms
import CodeSnippetPage from "./Pages/Components/Randoms/CodeSnippetPage";
import SnippetPage from "./Pages/Components/Randoms/SnippetPage";

const App = () => {
  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* documentation */}
        <Route path="/getting-started" element={<ComponentsPage />} />
        <Route path="/getting-started/overview" element={<OverviewPage />} />
        <Route path="/getting-started/faq" element={<FaqPage />} />
        <Route path="/getting-started/templates" element={<TempletePage />} />

        {/* components */}

        <Route
          path="/components/all-components"
          element={<AllComponentsPage />}
        />

        {/* inputs */}
        <Route path="/components/input-text" element={<InputTextPage />} />
        <Route
          path="/components/input-textarea"
          element={<InputTextareaPage />}
        />
        <Route path="/components/input-switch" element={<InputSwitchPage />} />
        <Route path="/components/input-select" element={<InputSelectPage />} />
        <Route path="/components/input-radio" element={<InputRadioPage />} />
        <Route path="/components/input-file" element={<InputFilePage />} />

        {/* buttons */}
        <Route path="/components/normal-button" element={<NormalPage />} />
        <Route path="/components/rgb-border" element={<RgbButtonPage />} />
        <Route
          path="/components/animated-button"
          element={<AnimatedButtonPage />}
        />

        {/* navigation */}
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/dropdown" element={<DropDownPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/chip" element={<ChipPage />} />

        {/* feedback */}
        <Route path="/components/skeleton" element={<SkeletonPage />} />
        <Route
          path="/components/alert-message"
          element={<AlertMessagePage />}
        />
        <Route path="/components/dialog-message" element={<DialogPage />} />
        <Route path="/components/loader" element={<LoaderPage />} />
        <Route path="/components/testimonials" element={<TestimonialPage />} />
        <Route path="/components/notification" element={<NotificationPage />} />

        {/* surface */}
        <Route path="/components/cards" element={<CardPage />} />
        <Route
          path="/components/image-gallery"
          element={<ImageGalleryPage />}
        />
        <Route path="/components/according" element={<AccordingPage />} />
        <Route path="/components/appbar" element={<AppbarPage />} />

        {/* data display */}
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />

        {/* randoms */}
        <Route path="/components/code" element={<CodeSnippetPage />} />
        <Route path="/components/snippet" element={<SnippetPage />} />
      </Routes>
    </>
  );
};

export default App;
