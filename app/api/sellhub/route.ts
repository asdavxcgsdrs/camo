import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { productId, variantId, quantity, email, coupon } = await req.json()

    if (!productId || !variantId || !quantity || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const payload = {
      email,
      currency: "usd",
      returnUrl: "https://ghosty-servicespvjtoy4ldn.sellhub.cx?redirect=dashboard",
      cart: {
        items: [
          {
            id: productId,
            variant: { id: variantId },
            quantity,
            coupon: coupon ?? "",
            addons: [],
            name: "", // optional
          },
        ],
        bundles: [],
      },
      cartBundles: [],
      methodName: "",
      bundleIds: [],
      customFieldValues: [],
    }

    const shRes = await fetch("https://ghosty-servicespvjtoy4ldn.sellhub.cx/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const raw = await shRes.text()
    let data: any
    try { data = JSON.parse(raw) } catch { data = raw }

    if (shRes.ok && data?.session?.id) {
      const url = `https://ghosty-servicespvjtoy4ldn.sellhub.cx/checkout/${data.session.id}`
      return NextResponse.json({ checkoutUrl: url })
    }

    const isUrl = (v: unknown): v is string => typeof v === "string" && /^https?:\/\//.test(v)
    let firstUrl = data?.checkoutUrl ?? data?.url ?? (isUrl(raw) ? raw.trim() : null)
    if (firstUrl) {
      firstUrl = firstUrl.replace(/^https:\/\/[^/]+/, "ghosty-servicespvjtoy4ldn.sellhub.cx")
      return NextResponse.json({ checkoutUrl: firstUrl })
    }

    return NextResponse.json({ error: data?.error ?? "Unknown error", details: data }, { status: shRes.status || 500 })
  } catch (err) {
    console.error("Fatal:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
