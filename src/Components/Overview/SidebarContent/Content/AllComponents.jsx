import React, { useState } from "react";

// card component
import ComponentCardTemplete from "../../../../Shared/ComponentCardTemplete";
import OverviewFooter from "../../../../Shared/OverviewFooter";
import { Helmet } from "react-helmet";
import { allComponents } from "../../../../Utils/AllComponents";

const AllComponents = () => {
  const [buttonsData, setButtonsData] = useState([]);
  const [inputsData, setInputsData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [navigationsData, setNavigationsData] = useState([]);
  const [surfaceData, setSurfaceData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  allComponents?.map((componentObj) => {
    if (componentObj.groupName === "button") {
      buttonsData.push(componentObj);
      return;
    }
    if (componentObj.groupName === "input") {
      inputsData.push(componentObj);
      return;
    }
    if (componentObj.groupName === "surface") {
      surfaceData.push(componentObj);
      return;
    }
    if (componentObj.groupName === "feedback") {
      feedbackData.push(componentObj);
      return;
    }
    if (componentObj.groupName === "data_display") {
      displayData.push(componentObj);
      return;
    }
    if (componentObj.groupName === "navigation") {
      navigationsData.push(componentObj);
      return;
    }
  });

  return (
    <>
      <aside className="w-[80%]">
        <h2 className="font-[600] text-[#000] capitalize text-[2.5rem]">
          ZenUI Library
        </h2>
        <p className="text-text text-[0.9rem]">
          Every ZenUI Library component available for free.
        </p>

        <p className="text-text text-[0.9rem] mt-8">
          ZenUI is a website where you can get all the component designs you
          want and they are completely free. You can copy and use them in your
          own projects from here. All the guidelines are given very nicely on
          the website so that you can understand everything well. Our components
          are developed following professional coding so you can use them with
          confidence.
        </p>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">input</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          {inputsData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">Navigation</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          {navigationsData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] mb-3">Buttons</h2>
        <div className="grid grid-cols-3  gap-8">
          {buttonsData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">Feedback</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          {feedbackData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] mb-3">Surface</h2>
        <div className="grid grid-cols-3  gap-8">
          {surfaceData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] mb-3">Data Display</h2>
        <div className="grid grid-cols-3  gap-8">
          {displayData?.map((button) => (
            <a href={button.url} className="border border-border rounded">
              <img
                src={button.image}
                alt="component/image"
                className="w-full h-[150px] object-cover"
              />
              <div className="border-t border-border p-4">
                <h2 className="text-text font-[600] text-[1rem] capitalize">
                  {button.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </aside>

      <OverviewFooter />
      <Helmet>
        <title>React-Tailwind UI Components</title>
      </Helmet>
    </>
  );
};

export default AllComponents;
