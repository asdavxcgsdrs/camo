"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

interface Props { productId: string; variantId: string; quantity: number; children: React.ReactNode }

export default function SellHubCheckout({ productId, variantId, quantity, children }: Props) {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState("")
  const [coupon, setCoupon] = useState("")

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/sellhub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, variantId, quantity, email, coupon }),
      })
      const data = res.ok ? await res.json() : await res.json().catch(async () => await res.text())
      if (!res.ok) throw new Error(data.error || data)

      const url = data.checkoutUrl || data.url || data.checkout_url
      if (!url) throw new Error("No checkout URL returned")
      window.location.href = url

    } catch (e: any) {
      console.error(e)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button onClick={() => setModal(true)} disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin" /> : children}
      </Button>
      {error && <p className="text-red-500">{error}</p>}

      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Purchase</DialogTitle>
            <DialogDescription>Enter email and optional coupon</DialogDescription>
          </DialogHeader>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Label htmlFor="coupon">Coupon</Label>
          <Input id="coupon" value={coupon} onChange={e => setCoupon(e.target.value)} />
          <Button onClick={handleCheckout} disabled={isLoading || !email}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Proceed to Checkout"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
