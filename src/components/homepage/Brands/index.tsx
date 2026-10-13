import React from "react";

const beautyCategories = ["SKINCARE", "MAKEUP", "LIP CARE", "BODY CARE", "FRAGRANCE"];

const Brands = () => (
  <div className="bg-[#4A152C]">
    <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-7 px-4 py-5 md:py-0 xl:px-0">
      {beautyCategories.map((category) => <span key={category} className="my-3 md:my-7 text-white/95 text-sm sm:text-base lg:text-lg font-semibold tracking-[0.16em]">{category}</span>)}
    </div>
  </div>
);

export default Brands;
