"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Star, Filter, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      name: "VALORANT",
      image: "/images/valorant.png",
      status: "Undetected",
      features: ["Aimbot", "ESP/Wallhack", "Triggerbot", "No Recoil"],
      slug: "valorant-cheat",
      rating: 4.9,
      reviews: 847,
      category: "fps",
      popular: true,
      price: 12.99,
      gameTitle: "VALORANT",
    },
    {
      name: "HWID SPOOFER",
      image: "/images/hwidunban.png",
      status: "Working",
      features: ["Instant Unban", "All Games", "All Motherboards", "VGK Bypass"],
      slug: "hwid-unbanner",
      rating: 4.8,
      reviews: 623,
      category: "tools",
      price: 16.99,
      gameTitle: "UNIVERSAL",
    },
    {
      name: "TEMP HWID UNBAN",
      image: "/images/tempunban.png",
      status: "Available",
      features: ["24h Unban", "Quick Setup", "Budget Option", "Reliable"],
      slug: "temp-hwid-unban",
      rating: 4.7,
      reviews: 412,
      category: "tools",
      price: 9.99,
      gameTitle: "TEMP UNBAN",
    },
    {
      name: "BO6 WARZONE",
      image: "/images/bo6.png",
      status: "Undetected",
      features: ["Aimbot", "ESP", "Radar", "No Recoil"],
      slug: "bo6-warzone-cheat",
      isNew: true,
      price: 9.99,
      reviews: 200,
      gameTitle: "BO6 WARZONE",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || product.category === selectedFilter
    return matchesSearch && matchesFilter
  })

  const generateParticles = (count: number) => {
    const colors = ["bg-cyan-400/30", "bg-red-400/30", "bg-purple-400/30", "bg-green-400/30", "bg-pink-400/30"]
    return [...Array(count)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 rounded-full animate-valorant-particle-float ${colors[Math.floor(Math.random() * colors.length)]}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          "--animation-duration": `${5 + Math.random() * 5}s`, // 5-10 seconds
          "--tw-translate-x": `${(Math.random() - 0.5) * 300}px`, // -150 to 150px
          "--tw-translate-y": `${(Math.random() - 0.5) * 300}px`, // -150 to 150px
          "--tw-rotate": `${Math.random() * 360}deg`, // 0 to 360deg
          animationDelay: `${Math.random() * 5}s`,
          width: `${0.5 + Math.random() * 2}px`, // Vary particle size
          height: `${0.5 + Math.random() * 2}px`,
        }}
      ></div>
    ))
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-valorant-gradient opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-background-pulse-glow"></div>
        <div className="absolute top-0 left-0 w-full h-full">{generateParticles(70)}</div>
      </div>

      <Header />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SELECT YOUR GAME
          </h1>
          <p className="text-gray-200 text-xl max-w-2xl mx-auto">
            Premium, undetected enhancements engineered for every battleground
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 backdrop-blur-sm border-gray-700 text-white placeholder-gray-300 transition-all duration-300 focus:border-blue-500 focus:bg-gray-900/80"
            />
          </div>
          <div className="flex gap-2">
            {[
              { id: "all", label: "All Products" },
              { id: "fps", label: "FPS Games" },
              { id: "tools", label: "Tools" },
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-black"
                    : "border-gray-700 text-gray-200 bg-transparent hover:bg-blue-500/10 hover:border-blue-500"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Link key={index} href={`/product/${product.slug}`}>
                <Card
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 overflow-hidden transition-all duration-500 hover:bg-gray-800/80 cursor-pointer group hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 relative rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 text-sm font-bold rounded-lg animate-pulse">
                        🔥 Popular
                      </Badge>
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm font-bold rounded-lg animate-bounce">
                        ✨ New
                      </Badge>
                    </div>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-3 py-1 text-sm font-bold rounded-lg">
                      From ${product.price}
                    </Badge>
                  </div>

                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} - Premium Gaming Cheat`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                      {/* Game Title Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-black text-3xl md:text-4xl text-center leading-tight drop-shadow-2xl">
                          {product.gameTitle}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 bg-gray-900/90">
                      <div className="text-center mb-4">
                        <h4 className="text-white font-bold text-lg mb-1">{product.name}</h4>
                      </div>

                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                          <span className="text-sm ml-1">{product.rating}</span>
                        </div>
                        <span className="text-gray-300 text-sm">({product.reviews} reviews)</span>
                      </div>

                      {/* Buy Now Button */}
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-bold py-3 text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-[1.02]">
                        Buy Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-300 text-xl">No products found matching "{searchTerm}".</p>
            <Button onClick={() => setSearchTerm("")} className="mt-4 bg-blue-600 hover:bg-blue-700 text-black">
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
