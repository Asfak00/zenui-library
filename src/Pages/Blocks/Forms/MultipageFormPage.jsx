
// components
import Navbar from "../../../Components/Home/Navbar.jsx";
import Sidebar from "../../../Components/Overview/Sidebar/index.jsx";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../../Components/Overview/Sidebar/MobileSidebar.jsx";
import MultipageForm from "../../../Components/Overview/SidebarContent/Blocks/Forms/MultipageForm.jsx";

const MultipageFormPage = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className="flex w-full mx-auto">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem]">
                    <Sidebar startContent={47} />
                </div>

                <div className="w-full max-h-[89vh] min-h-[89vh] overflow-y-auto pt-[5rem] 640px:pt-[5rem] 640px:py-[10rem] 1024px:py-[2rem] 1024px:px-[0.5rem] relative" style={{scrollbarWidth: 'none'}}>
                    <MobileSidebar startContent={47}/>
                    <MultipageForm />
                </div>
            </div>
        </>
    );
};

export default MultipageFormPage;
