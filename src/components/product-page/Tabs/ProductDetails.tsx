import React from "react";

export type SpecItem = { label: string; value: string };

const specsData: SpecItem[] = [
  { label: "Collection", value: "Lady Porsh Beauty" },
  { label: "Routine", value: "Designed for your everyday beauty ritual" },
  { label: "Texture / finish", value: "Varies by product; see the item description" },
  { label: "How to use", value: "Follow the directions on the product packaging" },
  { label: "Storage", value: "Keep closed and store away from direct sunlight" },
];

const ProductDetails = () => (
  <>
    {specsData.map((item) => (
      <div className="grid grid-cols-3" key={item.label}>
        <div><p className="text-sm py-3 w-full leading-7 lg:py-4 pr-2 text-neutral-500">{item.label}</p></div>
        <div className="col-span-2 py-3 lg:py-4 border-b"><p className="text-sm w-full leading-7 text-neutral-800 font-medium">{item.value}</p></div>
      </div>
    ))}
  </>
);

export default ProductDetails;
