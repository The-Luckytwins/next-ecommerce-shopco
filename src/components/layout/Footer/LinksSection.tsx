import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  { id: 1, title: "Discover", children: [
    { id: 11, label: "Shop all", url: "/shop" },
    { id: 12, label: "New arrivals", url: "/shop#new-arrivals" },
    { id: 13, label: "Best sellers", url: "/shop#top-selling" },
    { id: 14, label: "Beauty rituals", url: "/shop#beauty-rituals" },
  ] },
  { id: 2, title: "Customer care", children: [
    { id: 21, label: "Contact", url: "#contact" },
    { id: 22, label: "Delivery details", url: "#delivery" },
    { id: 23, label: "Returns", url: "#returns" },
    { id: 24, label: "Privacy policy", url: "#privacy" },
  ] },
  { id: 3, title: "Your routine", children: [
    { id: 31, label: "Skincare", url: "/shop?category=skincare" },
    { id: 32, label: "Makeup", url: "/shop?category=makeup" },
    { id: 33, label: "Lip care", url: "/shop?category=lip-care" },
    { id: 34, label: "Body care", url: "/shop?category=body-care" },
  ] },
  { id: 4, title: "Explore", children: [
    { id: 41, label: "Fragrance", url: "/shop?category=fragrance" },
    { id: 42, label: "Gift sets", url: "/shop?category=gift-sets" },
    { id: 43, label: "Self-care notes", url: "#self-care" },
    { id: 44, label: "Instagram", url: "https://instagram.com" },
  ] },
];

const LinksSection = () => (
  <>
    {footerLinksData.map((item) => (
      <section className="flex flex-col mt-5" key={item.id}>
        <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6 text-[#4A152C]">{item.title}</h3>
        {item.children.map((link) => (
          <Link href={link.url} key={link.id} className={cn([link.id !== 41 && link.id !== 43 && "capitalize", "text-black/60 text-sm md:text-base mb-4 w-fit hover:text-[#4A152C] transition-colors"])}>
            {link.label}
          </Link>
        ))}
      </section>
    ))}
  </>
);

export default LinksSection;
