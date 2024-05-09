import React from "react";

const ComponentCardTemplete = ({ title }) => {
  return (
    <a href="#" className="border border-border rounded">
      <img
        src="https://i.ibb.co/tzFdVZt/Name-14.png"
        alt="component/image"
        className="w-full h-[150px] object-cover"
      />
      <div className="border-t border-border p-4">
        <h2 className="text-text font-[600] text-[1rem] capitalize">{title}</h2>
      </div>
    </a>
  );
};

export default ComponentCardTemplete;
