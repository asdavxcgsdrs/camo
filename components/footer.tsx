import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90 backdrop-blur-sm border-t border-blue-700/50 animate-banner-glow">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/ghosty-logo.png" alt="GHOSTY Logo" width={32} height={32} className="rounded-full" />
              <div className="text-white font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GHOSTY
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The most trusted provider of undetected gaming cheats and hacks. Premium quality products with guaranteed
              safety and instant delivery.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Excellent • Trustpilot</span>
            </div>
          </div>

          {/* Quick Links */}
          {[
            {
              title: "Popular Products",
              links: [
                { name: "Valorant Cheat", href: "/product/valorant-cheat" },
                { name: "COD Warzone Hack", href: "/product/bo6-warzone-cheat" },
                { name: "HWID Spoofer", href: "/product/hwid-unbanner" },
                { name: "Temp HWID Unban", href: "/product/temp-hwid-unban" },
              ],
            },
            {
              title: "Support",
              links: [
                { name: "Contact Us", href: "/support" },
                { name: "FAQ", href: "/support#faq" },
                { name: "Installation Guide", href: "/installation-guide" },
                { name: "Terms of Service", href: "/terms" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Customer Reviews", href: "/reviews" },
                { name: "Status Page", href: "/status" },
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 GHOSTY Services. All rights reserved. | Premium Gaming Cheats & Hacks
          </p>
        </div>
      </div>
    </footer>
  )
}
