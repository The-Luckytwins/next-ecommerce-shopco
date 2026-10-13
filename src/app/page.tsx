import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

const beautyImages = {
  lip: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=900&h=900&q=85",
  serum: "https://images.unsplash.com/photo-1783905326791-c1fb6b8bc113?auto=format&fit=crop&w=900&h=900&q=85",
  blush: "https://images.unsplash.com/photo-1780838039599-1cfcc26c11c4?auto=format&fit=crop&w=900&h=900&q=85",
  skincare: "https://images.unsplash.com/photo-1636918196923-12174002ebd7?auto=format&fit=crop&w=900&h=900&q=85",
  shelf: "https://images.unsplash.com/photo-1768881187102-ca0131989c8a?auto=format&fit=crop&w=900&h=900&q=85",
  cleanser: "https://images.unsplash.com/photo-1773187973415-2c85a99aaa82?auto=format&fit=crop&w=900&h=900&q=85",
  stone: "https://images.unsplash.com/photo-1781226968695-9ce2d4c0271b?auto=format&fit=crop&w=900&h=900&q=85",
  makeup: "https://images.unsplash.com/photo-1758613653858-a6edc4b690b4?auto=format&fit=crop&w=900&h=900&q=85",
};

export const newArrivalsData: Product[] = [
  { id: 1, title: "Rose Petal Lip Oil", srcUrl: beautyImages.lip, gallery: [beautyImages.lip, beautyImages.blush, beautyImages.makeup], price: 18, discount: { amount: 0, percentage: 0 }, rating: 4.8, description: "A glossy, cushion-soft lip oil that adds a sheer wash of rose-toned shine to your everyday look." },
  { id: 2, title: "Dew Drop Face Serum", srcUrl: beautyImages.serum, gallery: [beautyImages.serum, beautyImages.skincare, beautyImages.stone], price: 28, discount: { amount: 0, percentage: 10 }, rating: 4.9, description: "A lightweight-feeling serum for a fresh, dewy finish. Make it the thoughtful first step in your daily skincare ritual." },
  { id: 3, title: "Soft Flush Blush", srcUrl: beautyImages.blush, gallery: [beautyImages.blush, beautyImages.lip, beautyImages.makeup], price: 22, discount: { amount: 0, percentage: 0 }, rating: 4.7, description: "A soft, buildable-looking flush of color for cheeks, from a subtle tint to a more playful finish." },
  { id: 4, title: "Cloud Cream Moisturizer", srcUrl: beautyImages.skincare, gallery: [beautyImages.skincare, beautyImages.serum, beautyImages.stone], price: 32, discount: { amount: 0, percentage: 15 }, rating: 4.8, description: "A comforting daily moisturizer for a smooth, fresh-looking finish. Layer it into your morning or evening routine." },
];

export const topSellingData: Product[] = [
  { id: 5, title: "Velvet Matte Lipstick", srcUrl: beautyImages.lip, gallery: [beautyImages.lip, beautyImages.blush, beautyImages.makeup], price: 20, discount: { amount: 0, percentage: 20 }, rating: 4.9, description: "A statement lip color with a soft, velvety look. Choose a shade from everyday nude to evening berry." },
  { id: 6, title: "The Glow Ritual Kit", srcUrl: beautyImages.shelf, gallery: [beautyImages.shelf, beautyImages.serum, beautyImages.stone], price: 48, discount: { amount: 0, percentage: 0 }, rating: 4.8, description: "A curated set of beauty-routine essentials, designed to make your daily self-care feel a little more special." },
  { id: 7, title: "Gentle Gel Cleanser", srcUrl: beautyImages.cleanser, gallery: [beautyImages.cleanser, beautyImages.skincare, beautyImages.serum], price: 24, discount: { amount: 0, percentage: 0 }, rating: 4.6, description: "A simple first step for your skincare routine. Use as directed on the packaging and follow with your preferred moisturizer." },
  { id: 8, title: "Amber Glow Face Oil", srcUrl: beautyImages.serum, gallery: [beautyImages.serum, beautyImages.stone, beautyImages.skincare], price: 30, discount: { amount: 0, percentage: 0 }, rating: 4.8, description: "A finishing oil for a luminous beauty ritual. Follow the directions on the label and make it your own." },
];

export const relatedProductData: Product[] = [
  { id: 9, title: "Botanical Body Butter", srcUrl: beautyImages.stone, gallery: [beautyImages.stone, beautyImages.skincare, beautyImages.serum], price: 26, discount: { amount: 0, percentage: 0 }, rating: 4.7, description: "A rich body-care essential for the slower moments in your self-care routine. Apply as directed on the package." },
  { id: 10, title: "Satin Skin Tint", srcUrl: beautyImages.makeup, gallery: [beautyImages.makeup, beautyImages.blush, beautyImages.lip], price: 34, discount: { amount: 0, percentage: 10 }, rating: 4.6, description: "A natural-looking complexion staple for days when you want an even, softly radiant finish." },
  { id: 11, title: "Rosewater Face Mist", srcUrl: beautyImages.cleanser, gallery: [beautyImages.cleanser, beautyImages.serum, beautyImages.shelf], price: 19, discount: { amount: 0, percentage: 0 }, rating: 4.5, description: "A refreshing-feeling mist to keep close through your morning routine or for a small beauty reset during the day." },
  { id: 12, title: "Everyday Radiance Set", srcUrl: beautyImages.shelf, gallery: [beautyImages.shelf, beautyImages.stone, beautyImages.skincare], price: 52, discount: { amount: 0, percentage: 15 }, rating: 4.9, description: "A giftable edit of beauty essentials for discovering your next favorite or sharing a thoughtful self-care moment." },
];

export const reviewsData: Review[] = [
  { id: 1, user: "Ama K.", content: "I love how easy it is to build a simple routine. The lip oil gives my everyday look the glossy finish I wanted.", rating: 5, date: "August 14, 2026" },
  { id: 2, user: "Sarah M.", content: "The product selection feels considered, and the skincare section makes it easy to browse for daily essentials.", rating: 5, date: "August 15, 2026" },
  { id: 3, user: "Nana E.", content: "The soft blush shades are exactly the kind of color I reach for. Lovely inspiration for a natural makeup look.", rating: 5, date: "August 16, 2026" },
  { id: 4, user: "Olivia P.", content: "The site is clean and straightforward to browse on my phone, and I can find items without fuss.", rating: 5, date: "August 17, 2026" },
  { id: 5, user: "Mariam A.", content: "I enjoy the mix of skincare and makeup essentials. The gift set is a lovely idea for a beauty lover.", rating: 5, date: "August 18, 2026" },
  { id: 6, user: "Esi D.", content: "The Lady Porsh look is warm and elegant. It makes choosing a little treat feel like part of the ritual.", rating: 5, date: "August 19, 2026" },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="New Beauty Drops" data={newArrivalsData} viewAllLink="/shop#new-arrivals" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="Best-Loved Beauty" data={topSellingData} viewAllLink="/shop#top-selling" />
        </div>
        <div className="mb-[50px] sm:mb-20"><DressStyle /></div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
