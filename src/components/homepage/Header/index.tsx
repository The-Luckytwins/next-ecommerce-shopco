import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const heroImage = "https://images.unsplash.com/photo-1758613653858-a6edc4b690b4?auto=format&fit=crop&w=1400&h=1400&q=85";

const Header = () => (
  <header className="bg-[#F8EFF1] pt-10 md:pt-24 overflow-hidden">
    <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <section className="max-w-frame px-4">
        <motion.p initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[#8E415D] font-semibold uppercase tracking-[0.24em] text-xs sm:text-sm mb-4">
          The Lady Porsh beauty edit
        </motion.p>
        <motion.h2 initial={{ y: "100px", opacity: 0, rotate: 4 }} whileInView={{ y: "0", opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}>
          YOUR BEAUTY. YOUR WAY.
        </motion.h2>
        <motion.p initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
          Meet your new beauty ritual. Explore feel-good skincare, expressive makeup and everyday essentials selected to help you make time for you.
        </motion.p>
        <motion.div initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}>
          <Link href="/shop" className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-[#4A152C] hover:bg-[#4A152C]/90 transition-all text-white px-14 py-4 rounded-full">Shop Beauty</Link>
        </motion.div>
        <motion.div initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6 }} className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
          <div className="flex flex-col"><span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"><AnimatedCounter from={0} to={3} />+</span><span className="text-xs xl:text-base text-black/60 text-nowrap">Beauty rituals</span></div>
          <Separator className="ml-6 md:ml-0 h-12 md:h-full bg-black/10" orientation="vertical" />
          <div className="flex flex-col ml-6 md:ml-0"><span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"><AnimatedCounter from={0} to={12} />+</span><span className="text-xs xl:text-base text-black/60 text-nowrap">Curated essentials</span></div>
          <Separator className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10" orientation="vertical" />
          <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0"><span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2"><AnimatedCounter from={0} to={1} /></span><span className="text-xs xl:text-base text-black/60 text-nowrap">Signature glow</span></div>
        </motion.div>
      </section>
      <motion.section initial={{ y: "100px", opacity: 0, rotate: 4 }} whileInView={{ y: "0", opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(180deg, rgba(248,239,241,0.02), rgba(74,21,44,0.10)), url('" + heroImage + "')" }}>
        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-[#4A152C]">A little moment, just for you</div>
        <Image priority src="/icons/big-star.svg" height={104} width={104} alt="" aria-hidden="true" className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]" />
        <Image priority src="/icons/small-star.svg" height={56} width={56} alt="" aria-hidden="true" className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]" />
      </motion.section>
    </div>
  </header>
);

export default Header;
