import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = { title: string; url: string; imageUrl: string; className?: string };

const DressStyleCard = ({ title, url, imageUrl, className }: DressStyleCardProps) => (
  <Link
    href={url}
    style={{ backgroundImage: "linear-gradient(90deg, rgba(255,248,249,0.96) 0%, rgba(255,248,249,0.72) 43%, rgba(255,248,249,0.08) 100%), url('" + imageUrl + "')" }}
    className={cn(["w-full md:h-full rounded-[20px] bg-[#F6E8EB] bg-top bg-no-repeat bg-cover text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 text-[#4A152C] transition-transform hover:scale-[1.01]", className])}
  >
    {title}
  </Link>
);

export default DressStyleCard;
