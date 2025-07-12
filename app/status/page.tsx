import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StatusPage() {
  const products = [
    {
      name: "Valorant Cheat",
      status: "Undetected",
      lastUpdate: "2 hours ago",
      uptime: "99.8%",
      version: "v2.4.1",
      gameVersion: "8.11",
      statusColor: "bg-green-600", // Keeping green for semantic meaning
      icon: CheckCircle,
    },
    {
      name: "HWID Unban",
      status: "Working",
      lastUpdate: "1 day ago",
      uptime: "100%",
      version: "v1.8.3",
      gameVersion: "Universal",
      statusColor: "bg-green-600", // Keeping green for semantic meaning
      icon: CheckCircle,
    },
    {
      name: "Temp HWID Unban",
      status: "Undetected",
      lastUpdate: "3 hours ago",
      uptime: "99.9%",
      version: "v1.2.7",
      gameVersion: "Universal",
      statusColor: "bg-green-600", // Keeping green for semantic meaning
      icon: CheckCircle,
    },
    {
      name: "BO6 Warzone Cheat",
      status: "Undetected",
      lastUpdate: "30 minutes ago",
      uptime: "99.7%",
      version: "v3.1.2",
      gameVersion: "1.52",
      statusColor: "bg-green-600", // Keeping green for semantic meaning
      icon: CheckCircle,
    },
  ]

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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Service Status
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time status of all our gaming cheats and services. We strive for 100% uptime and immediate updates.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-6 p-4 bg-gray-800 rounded-lg shadow-lg animate-pulse-glow">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <span className="text-green-400 font-bold text-2xl">All Systems Operational</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full ${product.statusColor} flex items-center justify-center`}>
                      <product.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                  <Badge className={`${product.statusColor} text-white px-3 py-1 text-sm font-semibold`}>
                    {product.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                  <div>
                    <span className="text-gray-400">Last Update:</span>
                    <div className="font-semibold text-gray-200">{product.lastUpdate}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Uptime:</span>
                    <div className="font-semibold text-gray-200">{product.uptime}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Version:</span>
                    <div className="font-semibold text-gray-200">{product.version}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Game Version:</span>
                    <div className="font-semibold text-gray-200">{product.gameVersion}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Status Legend */}
        <Card className="bg-gray-800/70 backdrop-blur-sm border-gray-700 mt-8 transition-all duration-300 hover:scale-[1.01] hover:border-blue-500 hover:shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Status Legend
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                <span>Undetected - Fully operational and safe to use</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
                <span>Maintenance - Temporary updates in progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                <span>Detected - Service temporarily unavailable</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Update Schedule */}
        <Card className="bg-gray-800/70 backdrop-blur-sm border-gray-700 mt-6 transition-all duration-300 hover:scale-[1.01] hover:border-blue-500 hover:shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Update Schedule
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
                <span>Game updates are typically patched within 2-6 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
                <span>Major game patches may take up to 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
                <span>Status page is updated in real-time</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
