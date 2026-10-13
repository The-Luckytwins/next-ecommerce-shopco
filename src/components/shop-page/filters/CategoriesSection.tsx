import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const categoriesData = [
  { title: "Skincare", slug: "/shop?category=skincare" },
  { title: "Makeup", slug: "/shop?category=makeup" },
  { title: "Lip Care", slug: "/shop?category=lip-care" },
  { title: "Body Care", slug: "/shop?category=body-care" },
  { title: "Fragrance", slug: "/shop?category=fragrance" },
];

const CategoriesSection = () => (
  <div className="flex flex-col space-y-0.5 text-black/60">
    {categoriesData.map((category) => (
      <Link key={category.slug} href={category.slug} className="flex items-center justify-between py-2">
        {category.title} <MdKeyboardArrowRight />
      </Link>
    ))}
  </div>
);

export default CategoriesSection;
