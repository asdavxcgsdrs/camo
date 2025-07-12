"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Shield, Zap, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GhostyHomepage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Generate network nodes and connections
  const generateNetworkElements = () => {
    const elements = []
    const nodeCount = 50
    const nodes = []

    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * 100
      const y = Math.random() * 100
      nodes.push({ x, y, id: i })

      elements.push(
        <div
          key={`dot-${i}`}
          className="network-dot"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />,
      )
    }

    // Generate connections between nearby nodes
    const connections = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2))
        if (distance < 15 && Math.random() > 0.7) {
          connections.push({ from: nodes[i], to: nodes[j] })
        }
      }
    }

    // Add SVG lines for connections
    elements.push(
      <svg key="connections" className="network-canvas" style={{ pointerEvents: "none" }}>
        {connections.map((conn, index) => (
          <line
            key={`line-${index}`}
            className="network-line"
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            style={{
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </svg>,
    )

    return elements
  }

  const testimonials = [
    {
      name: "Alex M.",
      game: "Valorant Player",
      review: "Been using GHOSTY cheats for 6 months. Never been detected, works perfectly every time.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      game: "COD Warzone",
      review: "Amazing support team helped me set everything up in minutes. The cheat is so smooth and undetectable.",
      rating: 5,
    },
    {
      name: "Mike R.",
      game: "Gaming Enthusiast",
      review:
        "I was skeptical at first but GHOSTY delivered exactly what they promised. Clean interface, regular updates.",
      rating: 5,
    },
  ]

  const products = [
    {
      name: "Valorant Cheat",
      image: "/images/valorant.png",
      status: "Undetected",
      features: ["Aimbot", "ESP/Wallhack", "Triggerbot", "No Recoil"],
      slug: "valorant-cheat",
      popular: true,
      price: 12.99,
      originalPrice: 19.99,
      gameTitle: "VALORANT",
      description:
        "Advanced aimbot with customizable settings, ESP/Wallhack with player information, and stream-safe mode.",
      rating: 4.9,
      reviews: 847,
    },
    {
      name: "HWID Spoofer",
      image: "/images/hwidunban.png",
      status: "Working",
      features: ["Instant Unban", "All Games", "All Motherboards", "VGK Bypass"],
      slug: "hwid-unbanner",
      price: 16.99,
      originalPrice: 24.99,
      gameTitle: "UNIVERSAL",
      description: "Bypass HWID bans permanently with support for all motherboards and VGK bypass technology.",
      rating: 4.8,
      reviews: 623,
    },
    {
      name: "Temp HWID Unban",
      image: "/images/tempunban.png",
      status: "Available",
      features: ["24h Unban", "Quick Setup", "Budget Option", "Reliable"],
      slug: "temp-hwid-unban",
      price: 9.99,
      originalPrice: 14.99,
      gameTitle: "TEMP UNBAN",
      description: "Temporary HWID unban solution for Fortnite and EAC games with quick setup process.",
      rating: 4.7,
      reviews: 412,
    },
    {
      name: "BO6 Warzone Cheat",
      image: "/images/bo6.png",
      status: "Undetected",
      features: ["Aimbot", "ESP", "Radar", "No Recoil"],
      slug: "bo6-warzone-cheat",
      isNew: true,
      price: 9.99,
      originalPrice: 14.99,
      gameTitle: "BO6 WARZONE",
      description: "Dominate in BO6 Warzone with advanced aimbot, ESP, radar, and no recoil features.",
      rating: 4.9,
      reviews: 200,
    },
  ]

  return (
    <div className="min-h-screen text-white relative">
      {/* NEX-style Network Background */}
      <div className="nex-network-bg">
        {/* Grid overlay */}
        <div className="grid-overlay"></div>

        {/* Network elements */}
        {generateNetworkElements()}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="glowing-orb"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 text-center">
          <div className="container mx-auto px-4">
            <div
              className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Trust Badge */}
              <div className="mb-8">
                <Badge className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-6 py-2 text-sm font-medium rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Trusted by 50,000+ gamers worldwide
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-text">
                  GHOSTY
                </span>{" "}
                <span className="text-white drop-shadow-2xl cyber-text">Services</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-200 text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Undetected cheats and tools for your favorite games. Join thousands of satisfied customers dominating
                their matches.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group backdrop-blur-sm"
                  asChild
                >
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-400/20 hover:text-white px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-lg"
                  asChild
                >
                  <Link href="/status">View Status</Link>
                </Button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { number: "50,000+", label: "Active Users" },
                  { number: "500+", label: "Days Undetected" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "4.9/5", label: "Rating" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-blue-500/20"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 cyber-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cyber-text">
                Our Products
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Premium gaming enhancements designed for performance and safety
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Link key={index} href={`/product/${product.slug}`}>
                  <Card className="bg-gray-900/60 backdrop-blur-sm border border-blue-500/20 overflow-hidden transition-all duration-500 hover:bg-gray-800/60 cursor-pointer group hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 relative rounded-xl h-full">
                    {/* Status Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-3 py-1 text-xs font-bold rounded-lg">
                        {product.status}
                      </Badge>
                      {product.popular && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 text-xs font-bold rounded-lg">
                          🔥 Popular
                        </Badge>
                      )}
                      {product.isNew && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded-lg">
                          ✨ New
                        </Badge>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-400 cyber-text">${product.price}</div>
                        <div className="text-sm text-gray-500 line-through">${product.originalPrice}</div>
                      </div>
                    </div>

                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={`${product.name} - Premium Gaming Enhancement`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white mb-2 cyber-text">{product.name}</h3>
                          <p className="text-gray-300 text-sm mb-3">{product.description}</p>

                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? "fill-blue-500 text-blue-500" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-300">({product.reviews} reviews)</span>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {product.features.slice(0, 3).map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant="outline"
                                className="text-xs border-blue-500/30 text-blue-300 bg-blue-500/10"
                              >
                                {feature}
                              </Badge>
                            ))}
                            {product.features.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-gray-500/30 text-gray-400 bg-gray-500/10"
                              >
                                +{product.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Buy Button */}
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-bold py-3 text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-[1.02] mt-auto">
                          Buy Now - ${product.price}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 cyber-text">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GHOSTY</span>
                ?
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                The most trusted provider of undetected gaming enhancements with proven track record
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Undetected",
                  description: "Advanced anti-cheat bypass technology with 500+ days undetected record",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Zap,
                  title: "Instant Delivery",
                  description: "Automated delivery system provides immediate access after purchase",
                  color: "from-cyan-500 to-cyan-600",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Expert support team available around the clock via Discord and tickets",
                  color: "from-blue-400 to-cyan-400",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/40 backdrop-blur-sm border-blue-500/20 text-center p-8 transition-all duration-500 hover:scale-105 hover:bg-gray-800/40 hover:border-blue-500/50 group cursor-pointer rounded-xl"
                >
                  <CardContent className="space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 cyber-text">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent cyber-text">
                Customer Reviews
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <span className="text-2xl font-semibold cyber-text">4.9/5</span>
                <span className="text-gray-300 text-lg">(1,325+ reviews)</span>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/40 backdrop-blur-sm border border-blue-500/20 p-8 transition-all duration-500 rounded-xl">
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-xl italic text-center leading-relaxed">
                    "{testimonials[currentTestimonial].review}"
                  </p>
                  <div className="text-center">
                    <div className="font-semibold text-xl text-white cyber-text">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-300">{testimonials[currentTestimonial].game}</div>
                  </div>
                  <div className="flex justify-center space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-gray-500 hover:bg-gray-400"
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cyber-text">
                Ready to Dominate?
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                Join thousands of satisfied customers and start winning today with our premium gaming enhancements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group backdrop-blur-sm"
                  asChild
                >
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-400/20 hover:text-white px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-lg"
                  asChild
                >
                  <a href="https://discord.gg/ghostyservice" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
