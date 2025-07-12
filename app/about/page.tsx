import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Users, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
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

      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About GHOSTY
        </h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300 leading-relaxed space-y-6 mb-12">
          <p className="text-lg text-center max-w-3xl mx-auto">
            Welcome to GHOSTY, your premier destination for high-quality, undetected gaming cheats and hacks. We are
            dedicated to providing gamers with the tools they need to enhance their gameplay experience, all while
            prioritizing safety, reliability, and exceptional customer support.
          </p>
          <p>
            Founded by a team of passionate gamers and experienced developers, GHOSTY was created with a clear mission:
            to offer superior cheating solutions that stand out in a crowded market. We understand the frustration of
            dealing with detected software, unreliable providers, and poor support. That's why we've built our
            reputation on a foundation of trust, innovation, and a commitment to our community.
          </p>
          <p>
            Our advanced anti-cheat bypass technology is constantly updated to ensure our products remain undetected,
            giving you peace of mind. We pride ourselves on instant delivery, 24/7 expert support, and a transparent
            approach to our services. Join the thousands of satisfied GHOSTY users who are dominating their favorite
            games with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700 text-center p-6 transition-all duration-300 hover:scale-105 hover:border-blue-500">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                To provide gamers with the most reliable, undetected, and user-friendly cheats, backed by unparalleled
                support.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center p-6 transition-all duration-300 hover:scale-105 hover:border-blue-500">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Technology</h3>
              <p className="text-gray-400 text-sm">
                Leveraging cutting-edge anti-cheat bypasses and frequent updates to ensure maximum safety and
                performance.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center p-6 transition-all duration-300 hover:scale-105 hover:border-blue-500">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Promise</h3>
              <p className="text-gray-400 text-sm">
                Instant delivery, 24/7 dedicated support, and a commitment to your satisfaction and gaming success.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Join the GHOSTY Community
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Become a part of our growing community of elite gamers. Get access to exclusive updates, support, and
            connect with other users.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            asChild
          >
            <a href="https://discord.gg/ghostyservice" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Our Discord
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
