import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqsData = [
  { question: "How do I choose the right product for my routine?", answer: "Start with the product description and intended use. Add new products to your routine gradually and follow the directions on each package." },
  { question: "Where can I find the ingredients?", answer: "Check the ingredient list on the product packaging before use. If you have known sensitivities, review the full list carefully." },
  { question: "How should I store my beauty products?", answer: "Unless the packaging says otherwise, keep products tightly closed and away from direct heat or sunlight." },
  { question: "Can I try a shade before choosing?", answer: "Use the product images and shade options as a guide. Screen settings and lighting can affect how a shade appears, so the result may look different in person." },
  { question: "What if my skin is sensitive?", answer: "Review the ingredient list and follow the package directions. Consider a patch test before using a new product, and stop use if irritation occurs." },
  { question: "Where can I find delivery and return information?", answer: "Please confirm delivery options and the applicable return policy with Lady Porsh before placing an order." },
];

const FaqContent = () => (
  <section>
    <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">Frequently asked questions</h3>
    <Accordion type="single" collapsible>
      {faqsData.map((faq, idx) => (
        <AccordionItem key={idx} value={"item-" + (idx + 1)}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FaqContent;
