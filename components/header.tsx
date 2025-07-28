"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Heart, Menu, MapPin, ChevronDown } from "lucide-react"

export function Header() {
  const [cartCount, setCartCount] = useState(3)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Deliver to New York 10001
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Customer Service</span>
            <span>Track Your Order</span>
            <span>Sell on MarketPlace</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MarketPlace
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex">
              <select className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Books</option>
              </select>
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                className="flex-1 border-l-0 border-r-0 rounded-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="hidden md:block">Account</span>
              <ChevronDown className="h-3 w-3" />
            </Button>

            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
              <span className="hidden md:block ml-1">Wishlist</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden md:block ml-1">Cart</span>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-8 py-3 text-sm">
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <Menu className="h-4 w-4 mr-2" />
              All Categories
            </Button>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Today's Deals
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Electronics
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Fashion
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Home & Garden
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Sports
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Books
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Prime
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
