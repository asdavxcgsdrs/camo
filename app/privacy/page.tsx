import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            At GHOSTY, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website ghostyservices.com and use our services.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you register on the website,
            make a purchase, or contact us. This information may include your name, email address, payment information,
            and any other details you choose to provide.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Process your transactions and deliver products.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Improve our website and services.</li>
            <li>Send you updates, promotional materials, and other communications (you can opt-out at any time).</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">3. Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
            without your consent, except as described below:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              **Service Providers:** We may share your information with third-party service providers who perform
              services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and
              customer service.
            </li>
            <li>
              **Legal Requirements:** We may disclose your information if required to do so by law or in response to
              valid requests by public authorities (e.g., a court order or government agency).
            </li>
            <li>
              **Business Transfers:** In connection with any merger, sale of company assets, financing, or acquisition
              of all or a portion of our business to another company.
            </li>
          </ul>
          <h2 className="2xl font-semibold text-white mt-6 mb-3">4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you
            place an order or enter, submit, or access your personal information. However, no method of transmission
            over the Internet or method of electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">5. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">6. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our support channels.</p>
          <p className="text-sm text-gray-500 mt-8">Last updated: July 11, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
