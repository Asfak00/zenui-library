const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="password" className="text-[15px] font-[400]">
        Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />
        {isEyeOpen ? (
          <IoEyeOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(false)}
          />
        ) : (
          <IoEyeOffOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Textarea;
