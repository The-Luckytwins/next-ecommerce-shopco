"use client";

import { Color, setColorSelection } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const colorsData: Color[] = [
  { name: "Rose Nude", code: "bg-[#C7838E]" },
  { name: "Berry", code: "bg-[#8E2947]" },
  { name: "Cocoa", code: "bg-[#744D43]" },
  { name: "Petal", code: "bg-[#E8BFC4]" },
];

const ColorSelection = () => {
  const { colorSelection } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-black/60 mb-4">Choose a shade</span>
      <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
        {colorsData.map((color) => (
          <button key={color.name} type="button" aria-label={"Choose " + color.name + " shade"} title={color.name} className={cn([color.code, "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/10"])} onClick={() => dispatch(setColorSelection(color))}>
            {colorSelection.name === color.name && <IoMdCheckmark className={color.name === "Petal" ? "text-black text-base" : "text-white text-base"} />}
          </button>
        ))}
      </div>
      <span className="mt-2 text-xs text-black/50">{colorSelection.name}</span>
    </div>
  );
};

export default ColorSelection;
