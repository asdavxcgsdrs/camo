import Image from "next/image"
import Link from "next/link"
import { MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-50 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90 backdrop-blur-xl border-b border-blue-700/50 sticky top-0 animate-banner-glow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/ghosty-logo.png"
                alt="GHOSTY - Premium Gaming Cheats"
                width={40}
                height={40}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
            </div>
            <div className="text-white font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              GHOSTY
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {[
              { href: "/products", label: "Store" },
              { href: "/status", label: "Status" },
              { href: "/reviews", label: "Reviews" },
              { href: "/support", label: "Support" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              asChild
            >
              <a href="https://discord.gg/ghostyservice" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                DISCORD
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-700 text-gray-300 bg-transparent hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300"
              asChild
            >
              <a href="https://ghostyservices.com/order/" target="_blank" rel="noopener noreferrer">
                <User className="w-4 h-4 mr-2" />
                Login
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
