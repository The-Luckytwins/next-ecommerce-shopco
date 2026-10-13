import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata: Metadata = {
  title: { default: "Lady Porsh | Beauty, Makeup & Skincare", template: "%s | Lady Porsh" },
  description: "Discover beauty essentials, skincare, makeup and self-care favorites at Lady Porsh. Find your next everyday ritual.",
  keywords: ["Lady Porsh", "cosmetics", "beauty products", "skincare", "makeup", "lip care", "beauty essentials", "face care", "body care"],
  applicationName: "Lady Porsh",
};

export const viewport: Viewport = { themeColor: "#4A152C" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#9C5A70" />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
