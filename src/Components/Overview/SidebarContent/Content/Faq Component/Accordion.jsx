import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, question, answer, toggle }) => {
  return (
    <div>
      <div
        className="transition-all duration-500 py-[15px] gap-4  flex justify-between items-center cursor-pointer "
        onClick={toggle}
      >
        <p className="font-[600] text-[#000] capitalize text-[1.3rem] transition-all duration-500">
          {question}
        </p>
        <div className="text-xl sm:text-[25px] transition-all duration-500">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {open && (
        <div className="transition-all duration-500 text-justify w-[90%] text-[13px] sm:text-[16px] leading-relaxed ">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
