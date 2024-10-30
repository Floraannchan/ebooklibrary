import React from "react";

export const BookCard = ({ title, img, description }) => {
  return (
    <div className="w-[240px] bg-[#f8eadd] shadow-md mb-8 p-4 mr-6 ease-in-out">
      <img src={img} alt="image" className="w-full rounded-lg aspect-square " />
      <div className="mt-4">
        <h3 className=" font-bold text-[1.4rem] mb-4">{title}</h3>
        <p className="text-[#888] text-[0.9rem]">{description}</p>
      </div>
    </div>
  );
};
