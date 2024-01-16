import React from "react";
import ContentHeader from "../../../../Shared/ContentHeader";

const Overview = () => {
  return (
    <aside>
      <h1 className="font-[600] text-[#000] text-[3rem] capitalize">
        react-tailwind UI
      </h1>
      <p className="w-[70%] text-text text-[1rem]">
        React-Tailwind UI is a free platform where you get all the components
        and designs you need to use. So find your favorite design or component.
      </p>

      <div className="mt-8 w-[90%]">
        <ContentHeader text={"Introduction"} />
        <p className="mt-3">
          Material UI is an open-source React component library that implements
          Google's Material Design.
        </p>
        <p className="mt-4">
          It includes a comprehensive collection of prebuilt components that are
          ready for use in production right out of the box.
        </p>
        <p className="mt-4">
          Material UI is beautiful by design and features a suite of
          customization options that make it easy to implement your own custom
          design system on top of our components.
        </p>
      </div>

      <div className="mt-8 w-[90%]">
        <ContentHeader text={"Advantages of react-tailwind UI"} />
        <ul className="flex flex-col gap-3 list-disc pl-4 mt-3">
          <li className="p-0 border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Ship faster:</b> Over 2,500 open-source contributors have poured
            countless hours into these components. Focus on your core business
            logic instead of reinventing the wheel—we've got your UI covered.
            Beautiful by default: We're meticulous about our implementation of
            Material Design, ensuring that every Material UI component meets the
            highest standards of form and function, but diverge from the
            official spec where necessary to provide multiple great options.
          </li>
          <li className="p-0 border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Customizability:</b> The library includes an extensive set of
            intuitive customizability features. The templates in our store
            demonstrate how far you can go with customization.
          </li>
          <li className="p-0 border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Cross-team collaboration:</b> Material UI's intuitive developer
            experience reduces the barrier to entry for back-end developers and
            less technical designers, empowering teams to collaborate more
            effectively. The design kits streamline your workflow and boost
            consistency between designers and developers.
          </li>
          <li className="p-0 border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Trusted by thousands of organizations:</b> Material UI has the
            largest UI community in the React ecosystem. It's almost as old as
            React itself—its history stretches back to 2014—and we're in this
            for the long haul. You can count on the community's support for
            years to come (e.g. Stack Overflow).
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Overview;
