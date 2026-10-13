import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const beautyRituals = [
  { title: "Everyday Glow", slug: "/shop?ritual=everyday-glow" },
  { title: "Soft Glam", slug: "/shop?ritual=soft-glam" },
  { title: "Night Routine", slug: "/shop?ritual=night-routine" },
  { title: "Self-Care", slug: "/shop?ritual=self-care" },
];

const DressStyleSection = () => (
  <Accordion type="single" collapsible defaultValue="filter-style">
    <AccordionItem value="filter-style" className="border-none">
      <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">Beauty Ritual</AccordionTrigger>
      <AccordionContent className="pt-4 pb-0">
        <div className="flex flex-col text-black/60 space-y-0.5">
          {beautyRituals.map((ritual) => (
            <Link key={ritual.slug} href={ritual.slug} className="flex items-center justify-between py-2">
              {ritual.title} <MdKeyboardArrowRight />
            </Link>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default DressStyleSection;
