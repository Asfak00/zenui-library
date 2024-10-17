import React, {useState, useEffect} from "react";

// react router dom
import {Route, Routes} from "react-router-dom";

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
import AnimatedButtonPage from "./Pages/Components/Buttons/AnimatedButtonPage";

// all components
import AllComponentsPage from "./Pages/Components/AllComponentsPage";

// navigation pages
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
import AnimatedCardsPage from "./Pages/Components/Surfaces/AnimatedCardsPage.jsx";
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
import ResizableLayoutPage from "./Pages/Components/Surfaces/ResizableLayoutPage.jsx";
import OtpInputPage from "./Pages/Components/Inputs/OtpInputPage.jsx";

// blocks
import ResponsiveNavbarPage from "./Pages/Blocks/Sections/ResponsiveNavbarPage.jsx";
import AllBlocksPage from "./Pages/Blocks/AllBlocksPage.jsx";
import HeroSectionPage from "./Pages/Blocks/Sections/HeroSectionPage.jsx";
import ProgressBarPage from "./Pages/Components/Navigation/ProgressBarPage.jsx";
import ContactFormPage from "./Pages/Blocks/Forms/ContactFormPage.jsx";
import ResponsiveSearchbarPage from "./Pages/Blocks/Randoms/ResponsiveSearchbarPage.jsx";
import BreadcrumbPage from "./Pages/Components/Navigation/BreadcrumbPage.jsx";
import RatingPage from "./Pages/Components/Navigation/RatingPage.jsx";
import TimelinePage from "./Pages/Components/Data Display/TimelinePage.jsx";
import NumberInputPage from "./Pages/Components/Inputs/NumberInputPage.jsx";
import StrongPasswordPage from "./Pages/Components/Inputs/StrongPasswordPage.jsx";
import CheckboxInputPage from "./Pages/Components/Inputs/CheckboxInputPage.jsx";
import EmptyPage from "./Pages/EmptyPage.jsx"
import StepsPage from "./Pages/Components/Navigation/StepsPage.jsx";

// icons page
import IconsPage from './Pages/IconsPages/IconsPage.jsx'
import ResponsiveFooterPage from "./Pages/Blocks/Randoms/ResponsiveFooterPage.jsx";
import AuthButtonPage from "./Pages/Components/Buttons/AuthButtonPage.jsx";

import OpacityPalettePage from "./Pages/OpacityPalettePage.jsx"
import WrongUrlErrorPage from "./Pages/Blocks/EmptyPages/WrongRoutePage.jsx";
import WrongRoutePage from "./Pages/Blocks/EmptyPages/EmptyPage.jsx";
import PricingSectionPage from "./Pages/Blocks/Sections/PricingSectionPage.jsx";
import NewsletterSectionPage from "./Pages/Blocks/Forms/NewsletterSectionPage.jsx";
import MultipageFormPage from "./Pages/Blocks/Forms/MultipageFormPage.jsx";
import ResponsiveSidebarPage from "./Pages/Blocks/Randoms/ResponsiveSidebarPage.jsx";
import InputSliderPage from "./Pages/Components/Inputs/InputSliderPage.jsx";

// layout playground page
import LayoutPlaygroundPage from "./Pages/LayoutPlaygroundPage.jsx";
import TreeDropdownPage from "./Pages/Components/Feedback/TreeDropdownPage.jsx";
import InstallationPage from "./Pages/InstallationPage.jsx";
import DragAndDropPage from "./Pages/Components/Surfaces/DragAndDropPage.jsx";


const App = () => {
    const [isCookie, setIsCookie] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isMemeVisible, setIsMemeVisible] = useState(false)

    let Title = document.title;
    window.addEventListener('blur', () => {
        document.title = 'Get more components 😍';
    })

    window.addEventListener('focus', () => {
        document.title = Title;
    })

    useEffect(() => {
        const handleRightClick = (event) => {
            event.preventDefault();
            setIsMemeVisible(true);
            const audio = new Audio('/rightclickmeme.mp3');
            audio.play();
            setTimeout(() => {
                setIsMemeVisible(false);
            }, 3500);
        };

        const handleKeyCombination = (event) => {
            if (
                (event.ctrlKey && event.shiftKey && event.key === 'I') ||
                (event.ctrlKey && event.shiftKey && event.key === 'J') ||
                (event.key === 'F12') ||
                (event.ctrlKey && event.key === 'U')
            ) {
                event.preventDefault();
                const audio = new Audio('/rightclickmeme.mp3');
                audio.play();
            }
        };

        document.addEventListener('contextmenu', handleRightClick);
        document.addEventListener('keydown', handleKeyCombination);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
            document.removeEventListener('keydown', handleKeyCombination);
        };
    }, []);

    document.addEventListener('mousemove', (event) => {
        setCursorPosition({
            x: event.clientX + 90,
            y: event.clientY + window.scrollY
        });
    });

    return (
        <>

            <img src='/rightClickMeme.gif' alt='meme' style={{
                left: cursorPosition.x + 'px',
                top: cursorPosition.y + 'px',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }}
                 className={`${isMemeVisible ? 'block' : 'hidden'} z-[3000] absolute rounded-full boxShadow w-[150px] h-[150px] transition-all shadow-md object-cover`}/>


            {/* all routes */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>

                {/* documentation */}
                <Route path="/getting-started" element={<ComponentsPage/>}/>
                <Route path="/getting-started/overview" element={<OverviewPage/>}/>
                <Route path="/getting-started/installation" element={<InstallationPage/>}/>
                <Route path="/getting-started/templates" element={<TempletePage/>}/>

                {/* components */}

                <Route
                    path="/components/all-components"
                    element={<AllComponentsPage/>}
                />

                {/* inputs */}
                <Route path="/components/input-text" element={<InputTextPage/>}/>
                <Route
                    path="/components/input-textarea"
                    element={<InputTextareaPage/>}
                />
                <Route path="/components/input-switch" element={<InputSwitchPage/>}/>
                <Route path="/components/otp-input" element={<OtpInputPage/>}/>
                <Route path="/components/input-select" element={<InputSelectPage/>}/>
                <Route path="/components/input-radio" element={<InputRadioPage/>}/>
                <Route path="/components/input-file" element={<InputFilePage/>}/>
                <Route path="/components/input-number" element={<NumberInputPage/>}/>
                <Route path="/components/strong-password" element={<StrongPasswordPage/>}/>
                <Route path="/components/input-checkbox" element={<CheckboxInputPage/>}/>
                <Route path="/components/input-range" element={<InputSliderPage/>}/>

                {/* buttons */}
                <Route path="/components/normal-button" element={<NormalPage/>}/>
                <Route path="/components/login-buttons" element={<AuthButtonPage/>}/>
                <Route path="/components/dropdown-button" element={<DropdownButtonPage/>}/>
                <Route
                    path="/components/animated-button"
                    element={<AnimatedButtonPage/>}
                />

                {/* navigation */}
                <Route path="/components/pagination" element={<PaginationPage/>}/>
                <Route path="/components/tabs" element={<TabsPage/>}/>
                <Route path="/components/modal" element={<ModalPage/>}/>
                <Route path="/components/progress-bar" element={<ProgressBarPage/>}/>
                <Route path="/components/chip" element={<ChipPage/>}/>
                <Route path="/components/breadcrumb" element={<BreadcrumbPage/>}/>
                <Route path="/components/rating" element={<RatingPage/>}/>
                <Route path="/components/stepper" element={<StepsPage/>}/>

                {/* feedback */}
                <Route path="/components/skeleton" element={<SkeletonPage/>}/>
                <Route
                    path="/components/alert-message"
                    element={<AlertMessagePage/>}
                />
                <Route path="/components/dialog-message" element={<DialogPage/>}/>
                <Route path="/components/tree-dropdown" element={<TreeDropdownPage/>}/>
                <Route path="/components/loader" element={<LoaderPage/>}/>
                <Route path="/components/testimonials" element={<TestimonialPage/>}/>
                <Route path="/components/notification" element={<NotificationPage/>}/>

                {/* surface */}
                <Route path="/components/cards" element={<CardPage/>}/>
                <Route path="/components/drag-and-drop" element={<DragAndDropPage/>}/>
                <Route path="/components/animated-cards" element={<AnimatedCardsPage/>}/>
                <Route
                    path="/components/image-gallery"
                    element={<ImageGalleryPage/>}
                />
                <Route path="/components/according" element={<AccordingPage/>}/>
                <Route path="/components/appbar" element={<AppbarPage/>}/>
                <Route path="/components/resizable-layout" element={<ResizableLayoutPage/>}/>

                {/* data display */}
                <Route path="/components/badge" element={<BadgePage/>}/>
                <Route path="/components/tooltip" element={<TooltipPage/>}/>
                <Route path="/components/timeline" element={<TimelinePage/>}/>

                {/* randoms */}
                <Route path="/components/code" element={<CodeSnippetPage/>}/>
                <Route path="/components/snippet" element={<SnippetPage/>}/>


                {/*  all blocks route  */}
                <Route path="/blocks/all-blocks" element={<AllBlocksPage/>}/>
                <Route path="/blocks/responsive-navbar" element={<ResponsiveNavbarPage/>}/>
                <Route path="/blocks/hero-section" element={<HeroSectionPage/>}/>
                <Route path="/blocks/contact-form" element={<ContactFormPage/>}/>
                <Route path="/blocks/responsive-search-bar" element={<ResponsiveSearchbarPage/>}/>
                <Route path="/blocks/responsive-footer" element={<ResponsiveFooterPage/>}/>
                <Route path="/blocks/404-page" element={<WrongUrlErrorPage/>}/>
                <Route path="/blocks/pricing-section" element={<PricingSectionPage/>}/>
                <Route path="/blocks/newsletter-form" element={<NewsletterSectionPage/>}/>
                <Route path="/blocks/multi-step-form" element={<MultipageFormPage/>}/>
                <Route path="/blocks/responsive-sidebar" element={<ResponsiveSidebarPage/>}/>
                <Route path="/blocks/empty-page" element={<WrongRoutePage/>}/>


                {/*  icons  */}
                <Route path="/icons" element={<IconsPage/>}/>

                {/* opacity palette */}
                <Route path='/color-palette' element={<OpacityPalettePage/>}/>

                {/* layout playground */}
                <Route path='/layout-playground' element={<LayoutPlaygroundPage/>}/>

                {/*  empty route  */}
                <Route path="*" element={<EmptyPage/>}/>

            </Routes>

            <CookieModal isModalOpen={isCookie} setisModalOpen={setIsCookie}/>
        </>
    );
};

export default App;
