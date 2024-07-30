import React, {useState} from "react";

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
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage.jsx";
import CookieModal from "./Shared/CookieModal.jsx";
import DropdownButtonPage from "./Pages/Components/Buttons/DropdownButtonPage.jsx";
import ResizableDivPage from "./Pages/Components/Surfaces/ResizableDivPage.jsx";
import OtpInputPage from "./Pages/Components/Inputs/OtpInputPage.jsx";

// blocks
import ResponsiveNavbarPage from "./Pages/Blocks/Sections/ResponsiveNavbarPage.jsx";
import AllBlocksPage from "./Pages/Blocks/AllBlocksPage.jsx";
import HeroSectionPage from "./Pages/Blocks/Sections/HeroSectionPage.jsx";
import ProgressBarPage from "./Pages/Components/Navigation/ProgressBarPage.jsx";
import ContactFormPage from "./Pages/Blocks/Randoms/ContactFormPage.jsx";
import ResponsiveSearchbarPage from "./Pages/Blocks/Randoms/ResponsiveSearchbarPage.jsx";
import BreadcrumbPage from "./Pages/Components/Navigation/BreadcrumbPage.jsx";
import RatingPage from "./Pages/Components/Navigation/RatingPage.jsx";
import TimelinePage from "./Pages/Components/Data Display/TimelinePage.jsx";
import NumberInputPage from "./Pages/Components/Inputs/NumberInputPage.jsx";

const App = () => {
  const [isCookie, setIsCookie] = useState(false)

  let Title = document.title;
  window.addEventListener('blur', ()=> {
    document.title = 'Get your components 😍';
  })

  window.addEventListener('focus', () => {
    document.title = Title;
  })

  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

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
        <Route path="/components/otp-input" element={<OtpInputPage />} />
        <Route path="/components/input-select" element={<InputSelectPage />} />
        <Route path="/components/input-radio" element={<InputRadioPage />} />
        <Route path="/components/input-file" element={<InputFilePage />} />
        <Route path="/components/input-number" element={<NumberInputPage />} />

        {/* buttons */}
        <Route path="/components/normal-button" element={<NormalPage />} />
        <Route path="/components/rgb-border" element={<RgbButtonPage />} />
        <Route path="/components/dropdown-button" element={<DropdownButtonPage />} />
        <Route
          path="/components/animated-button"
          element={<AnimatedButtonPage />}
        />

        {/* navigation */}
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/dropdown" element={<DropDownPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/progress-bar" element={<ProgressBarPage />} />
        <Route path="/components/chip" element={<ChipPage />} />
        <Route path="/components/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/components/rating" element={<RatingPage />} />

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
        <Route path="/components/resizable-card" element={<ResizableDivPage />} />

        {/* data display */}
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />
        <Route path="/components/timeline" element={<TimelinePage />} />

        {/* randoms */}
        <Route path="/components/code" element={<CodeSnippetPage />} />
        <Route path="/components/snippet" element={<SnippetPage />} />


      {/*  all blocks route  */}
        <Route path="/components/all-blocks" element={<AllBlocksPage />} />
        <Route path="/components/responsive-navbar" element={<ResponsiveNavbarPage />} />
        <Route path="/components/hero-section" element={<HeroSectionPage />} />
        <Route path="/components/contact-form" element={<ContactFormPage />} />
        <Route path="/components/responsive-search-bar" element={<ResponsiveSearchbarPage />} />

      </Routes>

      <CookieModal isModalOpen={isCookie} setisModalOpen={setIsCookie}/>
    </>
  );
};

export default App;
