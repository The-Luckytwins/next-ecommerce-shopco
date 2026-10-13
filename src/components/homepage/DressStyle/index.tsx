import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => (
  <div className="px-4 xl:px-0">
    <section className="max-w-frame mx-auto bg-[#F8EFF1] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
      <motion.h2 initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={cn([integralCF.className, "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize text-[#4A152C]"])}>
        Shop by beauty ritual
      </motion.h2>
      <motion.div initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5">
        <DressStyleCard title="Skincare" url="/shop?category=skincare" imageUrl="https://images.unsplash.com/photo-1636918196923-12174002ebd7?auto=format&fit=crop&w=1000&h=700&q=85" className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px]" />
        <DressStyleCard title="Makeup & Color" url="/shop?category=makeup" imageUrl="https://images.unsplash.com/photo-1780838039599-1cfcc26c11c4?auto=format&fit=crop&w=1200&h=700&q=85" className="md:max-w-[684px] h-[190px]" />
      </motion.div>
      <motion.div initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5">
        <DressStyleCard title="Fragrance & Glow" url="/shop?category=fragrance" imageUrl="https://images.unsplash.com/photo-1783905326791-c1fb6b8bc113?auto=format&fit=crop&w=1200&h=700&q=85" className="md:max-w-[684px] h-[190px]" />
        <DressStyleCard title="Body Care" url="/shop?category=body-care" imageUrl="https://images.unsplash.com/photo-1781226968695-9ce2d4c0271b?auto=format&fit=crop&w=1000&h=700&q=85" className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px]" />
      </motion.div>
    </section>
  </div>
);

export default DressStyle;
