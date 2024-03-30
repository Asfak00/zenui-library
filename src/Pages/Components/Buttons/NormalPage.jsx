
// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Normal from "../../../Components/Overview/SidebarContent/Content/Buttons/Normal";

const NormalPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={4} />
        </div>

        <div className="w-full p-12">
          <Normal />
        </div>
      </div>
    </>
  );
};

export default NormalPage;
