const SimpleProfileCard = () => {
  return (
    <div className="w-[60%] shadow-lg rounded">
      <div className="w-full h-[150px] relative bg-[url('https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center">
        <img
          src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
          alt=""
          className="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
        />
      </div>

      <div className="w-full text-center mt-16">
        <h2 className="font-[600] text-[1.4rem]">User Name</h2>
        <p className="text-text text-[0.9rem]">London</p>
      </div>

      <div className="w-full p-4 mt-8 border-t border-border flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">80k</h2>
          <p className="text-text text-[0.9rem]">Post</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">8k</h2>
          <p className="text-text text-[0.9rem]">Following</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">200k</h2>
          <p className="text-text text-[0.9rem]">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleProfileCard;
