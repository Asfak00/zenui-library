import React from "react";

const ComponentCardTemplete = ({ title }) => {
  return (
    <a href="#" className="border border-border rounded">
      <img
        src="https://tailwindflex.com/public/images/thumbnails/call-to-action-buttons/thumb_u.min.webp"
        alt="component/image"
      />
      <div className="border-t border-border p-4">
        <h2 className="text-text font-[600] text-[1rem] capitalize">{title}</h2>
      </div>
    </a>
  );
};

export default ComponentCardTemplete;
