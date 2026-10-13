"use client";

import { setSizeSelection } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import React from "react";

const SizeSelection = () => {
  const { sizeSelection } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  const formats = ["Mini", "Standard", "Full Size", "Gift Set"];

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-black/60 mb-4">Choose a format</span>
      <div className="flex items-center flex-wrap lg:space-x-3">
        {formats.map((format) => (
          <button key={format} type="button" className={cn(["bg-[#F8F0F2] flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base rounded-full m-1 lg:m-0 max-h-[46px]", sizeSelection === format && "bg-[#4A152C] font-medium text-white"])} onClick={() => dispatch(setSizeSelection(format))}>{format}</button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;
