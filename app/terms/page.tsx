import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            Welcome to GHOSTY! These Terms of Service ("Terms") govern your use of our website and services. By
            accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">1. Acceptance of Terms</h2>
          <p>
            By creating an account, purchasing a product, or otherwise using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. If you do not agree
            with any part of these Terms, you must not use our services.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">2. Use of Services</h2>
          <p>
            GHOSTY provides premium gaming cheats and hacks for various games. Our products are intended for
            entertainment purposes only. You agree to use our services responsibly and in compliance with all applicable
            laws and regulations. We are not responsible for any actions taken by you while using our products.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">3. Account Registration</h2>
          <p>
            To access certain features of our services, you may be required to register for an account. You agree to
            provide accurate, current, and complete information during the registration process and to update such
            information to keep it accurate, current, and complete. You are responsible for safeguarding your password
            and for any activities or actions under your account.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">4. Payments and Refunds</h2>
          <p>
            All purchases are final. We offer refunds only under specific circumstances, as outlined in our Refund
            Policy. By purchasing a product, you agree to our pricing and payment terms.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">5. Intellectual Property</h2>
          <p>
            All content, features, and functionality on our website, including but not limited to text, graphics, logos,
            and software, are the exclusive property of GHOSTY and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">6. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" and "as available" without any warranties of any kind, either express or
            implied. GHOSTY does not warrant that the services will be uninterrupted, secure, or error-free.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">7. Limitation of Liability</h2>
          <p>
            In no event shall GHOSTY, its directors, employees, or affiliates be liable for any indirect, incidental,
            special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
            goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use
            the services.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
            will be determined at our sole discretion.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us through our support channels.</p>
          <p className="text-sm text-gray-500 mt-8">Last updated: July 11, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
