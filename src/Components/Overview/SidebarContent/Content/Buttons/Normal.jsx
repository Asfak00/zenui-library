import React from "react";

// components
import Showcode from "../../../../ShowCode";

const Normal = () => {
  return (
    <aside>
      <h1 className="font-[600] text-[#000] capitalize text-[1.5rem]">
        normal button
      </h1>

      <p className="w-[70%] text-text text-[1rem]">
        React-Tailwind UI is a free platform where you get all the components
        and designs you need to use. So find your favorite design or component.
      </p>

      <div className="w-[70%] border border-border rounded mt-8">
        <div className="p-6 mb-4">
          <button className="px-6 py-2 border border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary transition duration-300 rounded flex items-center justify-center mx-auto">
            Button
          </button>
        </div>

        <Showcode
          code={`<button className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] 
          text-[#ffffff] hover:bg-[#ffffff] hover:text-primary transition duration-300 rounded"> Button
</button>`}
        />
      </div>
    </aside>
  );
};

export default Normal;
