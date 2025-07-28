import { Card, CardContent } from "@/components/ui/card"

export function Categories() {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Books",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
      color: "from-rose-500 to-rose-600",
    },
    {
      name: "Automotive",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop",
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop",
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white"
            >
              <CardContent className="p-4 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
