import React from "react";

// card component
import ComponentCardTemplete from "../../../../Shared/ComponentCardTemplete";
import OverviewFooter from "../../../../Shared/OverviewFooter";
import { Helmet } from "react-helmet";

const AllComponents = () => {
  return (
    <>
      <aside className="w-[80%]">
        <h2 className="font-[600] text-[#000] capitalize text-[2.5rem]">
          React-Tailwind UI
        </h2>
        <p className="text-text text-[0.9rem]">
          Every React-tailwind UI component available for free.
        </p>

        <p className="text-text text-[0.9rem] mt-8">
          React Tilewind UI is a website where you can get all the component
          designs you want and they are completely free. You can copy and use
          them in your own projects from here. All the guidelines are given very
          nicely on the website so that you can understand everything well. Our
          components are developed following professional coding so you can use
          them with confidence.
        </p>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">Buttons</h2>
        <div className="grid grid-cols-3  gap-8">
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">input</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">Feedback</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
        </div>

        <h2 className="mt-12 font-[600] text-[1.5rem] ">Navigation</h2>
        <div className="grid grid-cols-3 mt-4 gap-8">
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
          <ComponentCardTemplete title={"animated button"} />
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
