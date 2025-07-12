"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Shield, Zap, CheckCircle, Mail, Tag, CreditCard, Lock, X, Percent, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProductCheckoutModalProps {
  productId: string
  variantId: string
  quantity: number
  productName: string
  price: number
  originalPrice: number
  isOpen: boolean
  onClose: () => void
}

export default function ProductCheckoutModal({
  productId,
  variantId,
  quantity,
  productName,
  price,
  originalPrice,
  isOpen,
  onClose,
}: ProductCheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [coupon, setCoupon] = useState("")
  const [emailError, setEmailError] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [step, setStep] = useState(1)

  if (!isOpen) return null

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value.length > 0 && !validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const applyCoupon = () => {
    if (!coupon.trim()) {
      setError("Coupon code cannot be empty.")
      return
    }

    // Simulate coupon validation (replace with actual API call)
    const validCoupons = {
      SAVE10: 0.1,
      WELCOME15: 0.15,
      GHOSTY20: 0.2,
      GHOSTY15: 0.15, // Re-added GHOSTY15 as a valid coupon
      GH15: 0.15, // Re-added GH15 as a valid coupon
    }

    const discount = validCoupons[coupon.toUpperCase() as keyof typeof validCoupons]
    if (discount) {
      setDiscountAmount(price * discount)
      setCouponApplied(true)
      setError(null)
    } else {
      setError("Invalid coupon code")
      setCouponApplied(false)
      setDiscountAmount(0)
    }
  }

  const handleCheckout = async () => {
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError(null)
    setStep(2)

    const couponToSend = couponApplied ? coupon : ""
    console.log("Sending checkout request with:", { email, coupon: couponToSend })

    try {
      const response = await fetch("/api/sellhub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          variantId,
          quantity,
          email,
          coupon: couponToSend,
        }),
      })

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch {
          errorData = await response.text()
        }

        const errorMessage =
          errorData?.error ||
          errorData?.message ||
          (typeof errorData === "string" ? errorData : "Unknown error occurred.")

        setError(`Checkout failed: ${errorMessage}`)
        setStep(1)
        return
      }

      const data = await response.json()
      const checkoutUrl = data.checkoutUrl || data.url || data.checkout_url

      if (checkoutUrl) {
        setStep(3)
        setTimeout(() => {
          window.location.href = checkoutUrl
        }, 1500)
      } else {
        setError("Checkout URL not found. Please try again.")
        setStep(1)
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError("Failed to connect to checkout. Please try again later.")
      setStep(1)
    } finally {
      setIsLoading(false)
    }
  }

  const resetModal = () => {
    onClose()
    setStep(1)
    setError(null)
    setEmailError("")
    setIsLoading(false)
    setCouponApplied(false)
    setDiscountAmount(0)
    setCoupon("") // Ensure coupon input is also cleared
  }

  const finalPrice = price - discountAmount

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={resetModal} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-gray-900/95 backdrop-blur-xl text-white border border-blue-500/30 rounded-2xl overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
        >
          <X className="w-4 h-4 text-gray-400 hover:text-white" />
        </button>

        <div className="relative z-10 p-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      step >= stepNum
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-black scale-110"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`w-8 h-1 mx-2 rounded-full transition-all duration-500 ${
                        step > stepNum ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gray-700"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Product Info & Form */}
          {step === 1 && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Complete Your Purchase
                </h2>
                <p className="text-gray-300 text-base">
                  You're about to purchase <span className="font-semibold text-blue-400">{productName}</span>
                </p>
              </div>

              {/* Product Summary Card */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-blue-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{productName}</h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 text-sm">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-blue-400">${finalPrice.toFixed(2)}</span>
                    {discountAmount > 0 && (
                      <>
                        <span className="text-lg text-gray-500 line-through">${price.toFixed(2)}</span>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1">
                          Save ${discountAmount.toFixed(2)}
                        </Badge>
                      </>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">Qty: {quantity}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Shield, label: "Secure", color: "text-green-400" },
                  { icon: Zap, label: "Instant", color: "text-yellow-400" },
                  { icon: Lock, label: "Private", color: "text-blue-400" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} mb-1`} />
                    <span className="text-xs text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-200 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    placeholder="your@email.com"
                    className={`bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:ring-2 rounded-lg h-12 transition-all duration-300 hover:bg-gray-800/70 ${
                      emailError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : email.length > 0 && validateEmail(email)
                          ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                          : "focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />
                  {emailError && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{emailError}</span>
                    </div>
                  )}
                  {email.length > 0 && validateEmail(email) && !emailError && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm mt-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Email looks good!</span>
                    </div>
                  )}
                </div>

                {/* Coupon Input */}
                <div className="space-y-2">
                  <Label htmlFor="coupon" className="text-sm font-medium text-gray-200 flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-green-400" />
                    Coupon Code (Optional)
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="coupon"
                      value={coupon}
                      onChange={(e) => {
                        setCoupon(e.target.value)
                        if (couponApplied) {
                          setCouponApplied(false)
                          setDiscountAmount(0)
                        }
                      }}
                      placeholder="Enter discount code"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-lg h-12 transition-all duration-300 hover:bg-gray-800/70"
                      disabled={couponApplied}
                    />
                    <Button
                      onClick={applyCoupon}
                      disabled={!coupon.trim() || couponApplied}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Percent className="w-4 h-4 mr-2" />
                      Apply
                    </Button>
                  </div>
                  {couponApplied && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Coupon applied successfully!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-red-200 font-medium">Error</p>
                      <p className="text-xs text-red-300/80 mt-1">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <Button
                onClick={handleCheckout}
                disabled={isLoading || !email || emailError !== ""}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-bold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <CreditCard className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Proceed to Secure Checkout - ${finalPrice.toFixed(2)}</span>
              </Button>
            </div>
          )}

          {/* Step 2: Processing */}
          {step === 2 && (
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Loader2 className="w-8 h-8 text-black animate-spin" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Processing Your Order</h3>
                <p className="text-gray-300">Setting up your secure checkout session...</p>
              </div>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Redirecting to Checkout</h3>
                <p className="text-gray-300">You'll be redirected to complete your purchase in just a moment...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
