
// components
import Navbar from "../../../Components/Home/Navbar.jsx";
import Sidebar from "../../../Components/Overview/Sidebar/index.jsx";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../../Components/Overview/Sidebar/MobileSidebar.jsx";
import ContactForm from "../../../Components/Overview/SidebarContent/Blocks/Forms/ContactForm.jsx";

const ContactFormPage = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className="flex w-full mx-auto">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
                    <Sidebar startContent={48} />
                </div>

                <div className="w-full 1024px:p-12 min-h-screen">
                    <MobileSidebar startContent={48}/>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default ContactFormPage;
