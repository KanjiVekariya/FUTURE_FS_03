"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap } from "lucide-react"

export function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const flashDeals = [
    {
      name: "Wireless Earbuds Pro",
      price: 49.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop",
      sold: 45,
      total: 100,
    },
    {
      name: "Smartphone Case",
      price: 12.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=200&h=200&fit=crop",
      sold: 78,
      total: 150,
    },
    {
      name: "Portable Charger",
      price: 19.99,
      originalPrice: 39.99,
      image: "https://m.media-amazon.com/images/I/71NCm2PnazL._AC_UY218_.jpg",
      sold: 23,
      total: 80,
    },
    {
      name: "Bluetooth Speaker",
      price: 34.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop",
      sold: 67,
      total: 120,
    },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">Flash Deals</h2>
            </div>
            <Badge className="bg-red-500 text-white">Limited Time</Badge>
          </div>

          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <Clock className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Ends in:</span>
            <div className="flex space-x-1 font-mono font-bold text-red-600">
              <span className="bg-red-100 px-2 py-1 rounded text-sm">{timeLeft.hours.toString().padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-red-100 px-2 py-1 rounded text-sm">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-red-100 px-2 py-1 rounded text-sm">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((deal, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    {Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{deal.name}</h3>

                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-red-600">${deal.price}</span>
                  <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Sold: {deal.sold}</span>
                    <span>Available: {deal.total - deal.sold}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(deal.sold / deal.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                  Grab Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
