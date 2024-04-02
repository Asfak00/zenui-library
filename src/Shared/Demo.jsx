// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

const Select = () => {
  // close the dropdown is clicked outside
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
    }
  });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = [
    {
      icon: <IoMdFootball />,
      title: "Football",
    },
    {
      icon: <MdOutlineSportsCricket />,
      title: "Cricket",
    },
    {
      icon: <MdOutlineSportsTennis />,
      title: "Tennis",
    },
    {
      icon: <GiTennisRacket />,
      title: "Badminton",
    },
  ];

  return (
    <button
      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${
          isActive ? " rotate-[180deg]" : " rotate-0"
        } transition-all duration-300 text-[1.2rem]`}
      />
      <div
        className={`${
          isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8]"
        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
            key={index}
            onClick={(e) => setContent(e.target.textContent)}
          >
            {option.icon}
            {option.title}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Select;
