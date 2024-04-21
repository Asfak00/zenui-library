// icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Inputs = () => {
  const [isPassword, setIsPassword] = useState(false);

  return (
    <div className="w-[60%] relative">
      <input
        type={isPassword ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Password"
        className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full focus:border-primary transition-colors duration-300"
      />
      {isPassword ? (
        <IoEyeOutline
          className=" absolute top-3.5 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
          onClick={() => setIsPassword(false)}
        />
      ) : (
        <IoEyeOffOutline
          className=" absolute top-3.5 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
          onClick={() => setIsPassword(true)}
        />
      )}
    </div>
  );
};

export default Inputs;
