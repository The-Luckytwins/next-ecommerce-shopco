"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";

const shadeSwatches = ["bg-[#A45A69]", "bg-[#9A2F4F]", "bg-[#744D43]", "bg-[#D39B9F]", "bg-[#D9B7A4]", "bg-[#C9A878]", "bg-[#F1D8DA]", "bg-[#7E536F]", "bg-white", "bg-black"];

const ColorsSection = () => {
  const [selected, setSelected] = useState<string>(shadeSwatches[0]);
  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">Shades</AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {shadeSwatches.map((shade) => (
              <button key={shade} type="button" aria-label={"Select shade " + shade} className={cn([shade, "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"])} onClick={() => setSelected(shade)}>
                {selected === shade && <IoMdCheckmark className={shade === "bg-white" ? "text-black text-base" : "text-white text-base"} />}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;
