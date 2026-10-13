"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const SizeSection = () => {
  const [selected, setSelected] = useState<string>("Standard");
  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">Format</AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex items-center flex-wrap">
            {["Mini", "Standard", "Full Size", "Gift Set"].map((format) => (
              <button key={format} type="button" className={cn(["bg-[#F8F0F2] m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px]", selected === format && "bg-[#4A152C] font-medium text-white"])} onClick={() => setSelected(format)}>{format}</button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;
