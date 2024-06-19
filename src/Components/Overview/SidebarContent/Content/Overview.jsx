import React from "react";

// shared components
import OverviewFooter from "../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

const Overview = () => {
  return (
    <aside className='w-full pl-0 1024px:!pl-[5rem] !px-5 425px:!px-10'>
      <h1 className="font-[600] pt-[9.5rem] 1024px:pt-[4.5rem] text-[#0471d6] text-[2.5rem] 1024px:text-[3rem] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#0471d6] to-[#1A1674]">

        ZenUI Library
      </h1>
      <p className="w-full 1024px:w-[70%] text-text text-[1rem]">
        ZenUI is a free platform where you get all the components and designs
        you need to use. So find your favorite design or component.
      </p>

      <div className="mt-8 w-full 1024px:w-[80%] text-text">
        <ContentHeader text={"Introduction"} />
        <p className="mt-3">
          ZenUI is a developer friendly UI website. There are 100+ components,
          which will help a developer a lot in creating a website and save time.
        </p>
        <p className="mt-4">
          There are many components and built-in web templates that a developer
          can use to enhance their creativity.
        </p>
        <p className="mt-4">
          All the components and templates of ZenUI are made following modern
          design so they can play a special role in creating your project.
        </p>
      </div>

      <div className="mt-8 w-full 1024px:w-[80%] text-text">
        <ContentHeader text={"Advantages of ZenUI Library"} />
        <ul className="flex flex-col gap-3 list-disc pl-4 mt-3">
          <li className="p-0 hover:bg-transparent border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Customizability:</b> Our codes are very structured so you can
            customize them to your liking. You can customize the components
            according to your business logic.
          </li>
          <li className="p-0 hover:bg-transparent border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Beautiful Design:</b> All the components follow the ZenUI modern
            design. So you don't have to redesign to use them. More exciting
            thing is that since there is no need to design, you save your
            designing time.
          </li>
          <li className="p-0 hover:bg-transparent border-none hover:border-none hover:font-[400] hover:bg-secondary">
            <b>Pre build templetes:</b> ZenUI has many pre-built web templates.
            You can create a website without using them without any code. We
            have tried to follow the most modern design by following the design.
            The ZenUI contains 20+ web templates.
          </li>
        </ul>
      </div>

      <OverviewFooter />

      <Helmet>
        <title>Get-Started - Overview</title>
      </Helmet>
    </aside>
  );
};

export default Overview;
