// icons
import { CgProfile } from "react-icons/cg";

const Inputs = () => {
  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <div className=" text-center">
      <input
        type="file"
        name="image"
        id="fourthImage"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="w-[150px] h-[150px] rounded-full border border-[#e5eaf2] flex items-center justify-center">
        {imageLink === "" ? (
          <CgProfile className="text-[10rem] text-[#e5eaf2]" />
        ) : (
          <img
            src={imageLink}
            alt="image"
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </div>

      <button
        className="px-4 py-2 bg-[#3B9DF8] text-white rounded-md mt-5"
        onClick={handleUploadImageClick}
      >
        Upload profile
      </button>
    </div>
  );
};

export default Inputs;
