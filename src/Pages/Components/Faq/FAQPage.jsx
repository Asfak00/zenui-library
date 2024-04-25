// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import FaqCom from "../../../Components/Overview/SidebarContent/Content/Faq Component/FaqComponent";

const FaqPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={32} />
        </div>

        <div className="w-full p-12">
          <FaqCom />
        </div>
      </div>
    </>
  );
};

export default FaqPage;
