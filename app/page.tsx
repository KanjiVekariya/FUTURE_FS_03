import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { DealsSection } from "@/components/deals-section"
import { RecommendedProducts } from "@/components/recommended-products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <DealsSection />
      <RecommendedProducts />
      <Footer />
    </div>
  )
}
