"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Shield,
  Download,
  Users,
  Check,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  ShoppingCart,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect, useMemo } from "react"
import ProductCheckoutModal from "@/components/product-checkout-modal"

// Move productsData outside the component to prevent re-creation on each render
const productsData: Record<string, any> = {
  "valorant-cheat": {
    productId: "577ad719-1fe8-4940-b816-2d862e052803",
    name: "Valorant Cheat",
    originalPrice: 19.99,
    status: "Available",
    rating: 4.9,
    reviews: 847,
    images: ["/images/valorant.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thth-loX0uAMUHitgA7Y1RLMyB1YvWoNTO4.mp4"],
    description:
      "Undetected Valorant cheat. Supports Win10 & Win11. The most advanced and undetected Valorant cheat available. Our premium hack includes all the features you need to dominate your matches while staying completely undetected.",
    features: [
      "Advanced Aimbot with customizable settings",
      "ESP/Wallhack with player information",
      "Triggerbot for instant reactions",
      "No Recoil & No Spread",
      "Radar hack showing enemy positions",
      "Customizable crosshair",
      "Stream-safe mode",
      "Regular updates for new patches",
      "Unlock All",
      "SkinChanger",
    ],
    specifications: {
      "Supported OS": "Windows 10/11 (64-bit)",
      "Game Version": "Latest patch supported",
      "Detection Status": "Undetected for 500+ days",
      "Update Frequency": "Within 24 hours of game updates",
      Support: "24/7 Discord & Ticket support",
    },
    licenseOptions: [
        { label: "1 Week", price: 12.99, variantId: "d54219c4-9cad-4f71-aa0a-f19b8ea38d5b" },
        { label: "1 Month", price: 24.99, variantId: "82cb7f0f-fd89-4d2e-ae9a-4c1b771b9e0d" },
        { label: "Lifetime", price: 39.99, variantId: "f85e08b5-2aa9-452b-af6e-f11dd1b198e14" },
    ],
  },
  "hwid-unbanner": {
    productId: "6e4cae2c-ff18-4b8b-b66b-c13350717df1",
    name: "HWID Spoofer",
    originalPrice: 24.99,
    status: "Available",
    rating: 4.8,
    reviews: 623,
    images: ["/images/hwidunban.png"],
    description:
      "Bypass HWID bans permanently or temporarily. Our HWID Unban supports every game possible and every motherboard. We also include a VGK bypass with it, ensuring comprehensive unban solutions.",
    features: [
      "Instant Unban",
      "All Games",
      "Permanent",
      "Safe Method",
      "All Motherboards",
      "VGK Bypass (TPM-SecureBoot-HVCI)",
    ],
    specifications: {
      "Supported OS": "Windows 10/11 (64-bit)",
      "Game Version": "Universal",
      "Detection Status": "Undetected",
      "Update Frequency": "Regularly updated",
      Support: "24/7 Discord & Ticket support",
    },
    licenseOptions: [
      { label: "One-Time Use", price: 16.99, variantId: "b29c4bd1-681a-4b88-97fd-9ba2a7060224" },
      { label: "Lifetime", price: 39.99, variantId: "fcc25246-b85c-40ac-813a-3b1a3db12ef2" },
    ],
  },
  "bo6-warzone-cheat": {
    productId: "46f09f52-bf47-451f-8bec-3a01941809c7",
    name: "B06 Spoofer",
    originalPrice: 14.99,
    status: "Available",
    rating: 4.9,
    reviews: 756,
    images: ["/images/bo6.png"],
    description:
      "Undetected B06 and Warzone HWID Spoofer for secure play. Dominate in BO6 Warzone with our premium cheat. Features include advanced aimbot, ESP, radar, and no recoil for an unfair advantage.",
    features: ["Aimbot", "ESP", "Radar", "No Recoil"],
    specifications: {
      "Supported OS": "Windows 10/11 (64-bit)",
      "Game Version": "Latest patch supported",
      "Detection Status": "Undetected",
      "Update Frequency": "Within 24 hours of game updates",
      Support: "24/7 Discord & Ticket support",
    },
    licenseOptions: [
      { label: "1 Week", price: 9.99, variantId: "2bec402f-0c59-48c4-b4c0-e23b5662b19e" },
      { label: "1 Month", price: 19.99, variantId: "b654a232-fca7-4b17-8d21-ecc14ed16f97" },
      { label: "Lifetime", price: 29.99, variantId: "f4bd9f7f-af3f-46e4-b96d-b73eb4125f59" },
    ],
  },
  "temp-hwid-unban": {
    productId: "1c9aaec6-2a0a-4acd-b49c-85df4de0be6c",
    name: "HWID Unban (Temp)",
    originalPrice: 14.99,
    status: "Available",
    rating: 4.7,
    reviews: 412,
    images: ["/images/tempunban.png"],
    description:
      "Temporary HWID unban. Ideal for short-term gameplay. This temporary HWID unban works only for Fortnite and EAC games, and other similar games, but it does not support Valorant.",
    features: ["24h Unban", "Quick Setup", "Budget Option", "Reliable"],
    specifications: {
      "Supported OS": "Windows 10/11 (64-bit)",
      "Game Version": "Universal (excluding Valorant)",
      "Detection Status": "Undetected",
      "Update Frequency": "Regularly updated",
      Support: "24/7 Discord & Ticket support",
    },
    licenseOptions: [
      { label: "1 Week", price: 9.99, variantId: "acf7b8d0-10c7-4c46-b20b-ffa8449ced6b" },
      { label: "1 Month", price: 16.99, variantId: "9006c198-7182-4a53-b908-79cdc251720a" },
      { label: "Lifetime", price: 25.99, variantId: "836c2227-6936-4276-be5f-3675840066d0" },
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [selectedLicense, setSelectedLicense] = useState<any>(
    () => productsData[params.slug]?.licenseOptions?.[0] ?? null,
  )
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)
  }, [])

  const product = productsData[params.slug]

  // Generate consistent network elements using useMemo to prevent hydration issues
  const networkElements = useMemo(() => {
    if (!isMounted) return []

    const elements = []
    const nodeCount = 30
    const nodes = []

    // Use a seeded random function for consistent results
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }

    for (let i = 0; i < nodeCount; i++) {
      const x = seededRandom(i * 2) * 100
      const y = seededRandom(i * 2 + 1) * 100
      nodes.push({ x, y, id: i })

      elements.push(
        <div
          key={`dot-${i}`}
          className="network-dot"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${seededRandom(i * 3) * 4}s`,
          }}
        />,
      )
    }

    return elements
  }, [isMounted])

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted
      setIsVideoMuted(!isVideoMuted)
    }
  }

  const handleBuyNowClick = () => {
    console.log("Buy Now clicked!")
    console.log("Selected license:", selectedLicense)
    console.log("Is mounted:", isMounted)
    console.log("Current modal state:", isCheckoutModalOpen)
    setIsCheckoutModalOpen(true)
    console.log("Modal state after setting:", true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Enhanced Network Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950"></div>
        <div className="grid-overlay opacity-30"></div>
        {isMounted && networkElements}

        {/* Floating orbs - only render after mount */}
        {isMounted &&
          [...Array(6)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="glowing-orb"
              style={{
                width: `${80 + i * 20}px`,
                height: `${80 + i * 20}px`,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 25) % 100}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
      </div>

      <Header />

      {/* Enhanced Breadcrumb */}
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div
          className={`flex items-center space-x-2 text-sm transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-105">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <Link
            href="/products"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-105"
          >
            Store
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-blue-400 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Enhanced Left Sidebar */}
          <div className="lg:col-span-2">
            <Card
              className={`bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden transition-all duration-1000 hover:border-blue-500/40 hover:bg-gray-900/80 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6">
                <h3 className="font-bold mb-6 text-blue-400 text-lg flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Product Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Valorant Cheats", href: "#", icon: "🎯" },
                    { name: "COD Cheats", href: "#", icon: "🔫" },
                    { name: "HWID Spoofers", href: "#", icon: "🛡️" },
                  ].map((category, index) => (
                    <li key={index}>
                      <div className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group p-2 rounded-lg hover:bg-blue-500/10 cursor-pointer">
                        <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </span>
                        {category.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Main Content */}
          <div className="lg:col-span-7">
            {/* Enhanced Media Section */}
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-gray-900/40 backdrop-blur-sm group hover:border-blue-500/60 transition-all duration-500">
                {/* Main Media Display */}
                <div className="relative h-96 overflow-hidden">
                  {product.images[selectedImageIndex]?.endsWith(".mp4") ? (
                    <div className="relative w-full h-full">
                      <video
                        ref={videoRef}
                        src={product.images[selectedImageIndex]}
                        loop
                        muted={isVideoMuted}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                      />

                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <Button
                            onClick={toggleVideo}
                            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                          >
                            {isVideoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                          </Button>
                          <Button
                            onClick={toggleMute}
                            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                          >
                            {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={product.images[selectedImageIndex] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Status Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-bold rounded-full animate-pulse shadow-lg">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {product.status}
                    </Badge>
                  </div>
                </div>

                {/* Enhanced Thumbnail Grid */}
                <div className="p-4 bg-gray-900/60 backdrop-blur-sm">
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((media: string, index: number) => (
                      <div
                        key={index}
                        className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                          selectedImageIndex === index
                            ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"
                            : "hover:ring-2 hover:ring-blue-400/50"
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        {media.endsWith(".mp4") ? (
                          <div className="relative w-full h-full bg-gray-800">
                            <video src={media} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={media || "/placeholder.svg"}
                            alt={`${product.name} ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Product Tabs */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-900/60 backdrop-blur-sm border border-blue-500/20 rounded-xl p-1">
                  <TabsTrigger
                    value="description"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="specs"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-black rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Specifications
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card className="bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Product Description
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-lg">{product.description}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <Card className="bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {product.features.map((feature: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
                          >
                            <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                  <Card className="bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Specifications
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center py-3 px-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
                          >
                            <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors duration-300">
                              {key}:
                            </span>
                            <span className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Enhanced Right Sidebar - Product Info */}
          <div className="lg:col-span-3">
            <Card
              className={`bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden sticky top-24 hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "800ms" }}
            >
              <CardContent className="p-8">
                {/* Product Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {product.name}
                  </h1>

                  {/* Enhanced Price Display */}
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      ${selectedLicense?.price || product.price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                        Save ${(product.originalPrice - (selectedLicense?.price || product.price)).toFixed(2)}
                      </Badge>
                    </div>
                  </div>

                  {/* Enhanced Status & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-4 py-2 text-sm font-bold rounded-full">
                      {product.status}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 transition-all duration-300 hover:scale-110 ${
                              i < Math.floor(product.rating) ? "fill-blue-500 text-blue-500" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                {/* Enhanced Purchase Options */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-200">License Duration</label>
                    <select
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-800/70"
                      value={selectedLicense ? selectedLicense.label : ""}
                      onChange={(e) => {
                        const selected = product.licenseOptions.find((opt: any) => opt.label === e.target.value)
                        setSelectedLicense(selected)
                      }}
                    >
                      {product.licenseOptions.map((option: { label: string; price: number }) => (
                        <option key={option.label} value={option.label}>
                          {option.label} - ${option.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedLicense && (
                    <Button
                      onClick={handleBuyNowClick}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Buy Now - ${selectedLicense.price}</span>
                    </Button>
                  )}
                </div>

                <Separator className="my-6 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                {/* Enhanced Trust Signals */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4 text-blue-400">Why Choose GHOSTY?</h4>
                  {[
                    { icon: Shield, text: "100% Undetected", color: "text-green-400" },
                    { icon: Download, text: "Instant Download", color: "text-blue-400" },
                    { icon: Users, text: "24/7 Support", color: "text-purple-400" },
                    { icon: RefreshCw, text: "Regular Updates", color: "text-cyan-400" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <item.icon
                        className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-green-400">Popular Choice</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    {isMounted ? Math.floor(Math.random() * 50) + 20 : 25} people bought this in the last 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <section
          className={`mt-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ animationDelay: "1000ms" }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Is this cheat undetected?",
                answer:
                  "Yes, our Valorant cheat has been undetected for over 500 days. We use advanced anti-cheat bypass technology and update within 24 hours of any game patches.",
              },
              {
                question: "How do I get customer support?",
                answer:
                  "We offer 24/7 support through Discord and our ticket system. Our experienced team will help you with installation, configuration, and any issues you may encounter.",
              },
              {
                question: "How do I purchase and get instant access?",
                answer:
                  "Simply click 'Buy Now', complete the payment process, and you'll receive your download link and license key instantly via email. Setup takes less than 5 minutes.",
              },
              {
                question: "What if the cheat gets detected?",
                answer:
                  "In the unlikely event of detection, we provide immediate updates and compensation. We also offer HWID reset services and account protection guidance.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:bg-gray-900/80 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <h3 className="font-bold mb-4 text-blue-400 text-lg group-hover:text-blue-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Product Checkout Modal */}
      {isMounted && selectedLicense && (
        <ProductCheckoutModal
          productId={product.productId}
          variantId={selectedLicense.variantId}
          quantity={1}
          productName={product.name}
          price={selectedLicense.price}
          originalPrice={product.originalPrice}
          isOpen={isCheckoutModalOpen}
          onClose={() => setIsCheckoutModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  )
}
