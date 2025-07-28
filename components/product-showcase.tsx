import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  const products = [
    {
      name: "Nexus Phone Pro",
      description: "Revolutionary smartphone with quantum processing",
      image: "/placeholder.svg?height=400&width=300",
      price: "From $1,299",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Nexus Tablet Ultra",
      description: "Infinite creativity in your hands",
      image: "/placeholder.svg?height=400&width=300",
      price: "From $899",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Nexus Watch",
      description: "Your health and connectivity companion",
      image: "/placeholder.svg?height=400&width=300",
      price: "From $399",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Product Line</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the perfect device for your lifestyle. Each product is crafted with precision and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/70 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{product.price}</span>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
