import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Send, Clock, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportPage() {
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Customer Support
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get help with your GHOSTY products. Our support team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Discord Support</h4>
                      <p className="text-gray-400 text-sm">Join our Discord server for instant support</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black"
                      asChild
                    >
                      <a href="https://discord.gg/ghostyservice" target="_blank" rel="noopener noreferrer">
                        Join Discord
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Telegram Support</h4>
                      <p className="text-gray-400 text-sm">Contact us directly on Telegram</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black"
                      asChild
                    >
                      <a href="https://t.me/ghostygg" target="_blank" rel="noopener noreferrer">
                        Open Telegram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>24/7 Discord Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>24/7 Telegram Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              <HelpCircle className="w-6 h-6 mr-2 text-blue-400" />
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "How do I get support after purchase?",
                  answer:
                    "Join our Discord server or contact us on Telegram. We provide 24/7 support for all customers with instant responses.",
                },
                {
                  question: "What if my cheat gets detected?",
                  answer:
                    "We offer immediate updates and compensation in the rare case of detection. We also provide HWID reset services.",
                },
                {
                  question: "How long does it take to get help?",
                  answer:
                    "Our average response time is 15 minutes on Discord and 30 minutes on Telegram during business hours.",
                },
                {
                  question: "Do you offer installation help?",
                  answer:
                    "Yes! Our support team will guide you through the entire installation and setup process step by step.",
                },
                {
                  question: "Can I get a refund if I'm not satisfied?",
                  answer:
                    "We offer refunds within 24 hours of purchase if the product doesn't work as advertised. Contact support for assistance.",
                },
                {
                  question: "How do I update my cheat?",
                  answer:
                    "Updates are automatic through our loader. You'll be notified when updates are available and they install automatically.",
                },
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-blue-400">{faq.question}</h4>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
