
// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Normal from "../../../Components/Overview/SidebarContent/Content/Buttons/Normal";

const NormalPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={10} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Normal />
        </div>
      </div>
    </>
  );
};

export default NormalPage;
