import React from "react";

const BackgroundAccording = () => {
  const [bgAccording, setBgAccording] = useState(null);

  // according data
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description: `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description: `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description: `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="border bg-border rounded">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full bg-gray-700 p-3 rounded"
            onClick={() => handlebgAccording(index)}>
            <h2 className={` text-secondary font-[600] text-[1.2rem]`}>
              {according.title}
            </h2>
            <svg
              className="fill-[#ffffff] shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  bgAccording === index && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  bgAccording === index && "!rotate-180"
                }`}
              />
            </svg>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
              bgAccording === index
                ? "grid-rows-[1fr] opacity-100 p-3"
                : "grid-rows-[0fr] opacity-0"
            }`}>
            <div className="text-text text-[0.9rem] overflow-hidden">
              {according.description}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BackgroundAccording;
