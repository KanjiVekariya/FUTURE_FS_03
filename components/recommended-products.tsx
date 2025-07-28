import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

export function RecommendedProducts() {
  const products = [
    {
      name: "Laptop Stand Adjustable",
      price: 29.99,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop",
    },
    {
      name: "USB-C Hub 7-in-1",
      price: 39.99,
      rating: 4.6,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=200&h=200&fit=crop",
    },
    {
      name: "Desk Organizer Set",
      price: 24.99,
      rating: 4.3,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=200&fit=crop",
    },
    {
      name: "LED Desk Lamp",
      price: 34.99,
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Wireless Mouse",
      price: 19.99,
      rating: 4.5,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop",
    },
    {
      name: "Phone Stand",
      price: 14.99,
      rating: 4.2,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=200&h=200&fit=crop",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended for You</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-3">
                <div className="mb-3">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">${product.price}</span>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs"
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
