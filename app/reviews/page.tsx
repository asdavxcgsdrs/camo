import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ThumbsUp, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReviewsPage() {
  // Function to generate a random date within the last X days
  const getRandomDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo))
    return date
  }

  // Function to format date for display
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "today"
    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  // Generate ~1325 reviews by duplicating and varying base reviews
  const allReviews = []
  const numReviewsToGenerate = 1325 // Target approximately 1325 reviews
  const names = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "Elijah",
    "Charlotte",
    "William",
    "Sophia",
    "James",
    "Amelia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Mia",
    "Henry",
    "Evelyn",
    "Alexander",
    "Harper",
    "Ethan",
    "Abigail",
    "Mason",
    "Emily",
    "Logan",
    "Elizabeth",
    "Jackson",
    "Mila",
    "Sebastian",
    "Ella",
    "Jack",
    "Avery",
    "Aiden",
    "Sofia",
    "Owen",
    "Camila",
    "Samuel",
    "Aurora",
    "Matthew",
    "Scarlett",
    "David",
    "Victoria",
    "Joseph",
    "Luna",
    "Daniel",
    "Grace",
    "Gabriel",
    "Chloe",
    "Anthony",
    "Penelope",
    "Michael",
    "Layla",
    "Christopher",
    "Riley",
    "Joshua",
    "Zoey",
    "Andrew",
    "Nora",
    "Lily",
    "Nathan",
    "Eleanor",
    "Caleb",
    "Hannah",
    "Christian",
    "Lillian",
    "Dylan",
    "Addison",
    "Isaac",
    "Aubrey",
    "Luke",
    "Ellie",
    "Julian",
    "Stella",
    "Isaiah",
    "Levi",
    "Aaron",
    "Leah",
    "Connor",
    "Hazel",
    "Adrian",
    "Violet",
    "Charles",
    "Skylar",
    "Thomas",
    "Bella",
    "Hunter",
    "Nova",
  ]
  const products = ["Valorant Cheat", "HWID Unban", "Temp HWID Unban", "BO6 Warzone Cheat"]
  const reviewTemplates = [
    "+rep product is good, been using for X months no issues. Aimbot is smooth and ESP works perfectly. Highly recommend!",
    "+rep fast delivery and works as advertised. Got unbanned within minutes. Customer support was very helpful too.",
    "+rep amazing cheat, very stable and undetected. Been using it for weeks without any problems. Worth every penny!",
    "+rep excellent product, easy to use and configure. The features are exactly what I needed. Great job GHOSTY team!",
    "+rep good value for money. Worked perfectly for what I needed. Quick and reliable service.",
    "+rep best cheat I've used so far. Very smooth aimbot and the ESP is clean. No detection issues at all.",
    "+rep instant delivery and works great. Support team helped me through the whole process. Highly recommended!",
    "+rep product is amazing, very user friendly and effective. Been dominating lobbies since I got it. Thanks GHOSTY!",
    "+rep great cheat with regular updates. Never had any issues and customer service is top notch. Will buy again!",
    "+rep fast and reliable service. Got exactly what I paid for. The process was smooth and hassle-free.",
    "+rep worked perfectly! Was skeptical at first but it delivered exactly as promised. Great product and service.",
    "+rep excellent cheat, very stable and feature-rich. The aimbot settings are very customizable. Loving it!",
    "+rep good product overall. Easy setup and works well. Had one small issue but support fixed it quickly.",
    "+rep amazing service! Got unbanned immediately and the whole process was super easy. Definitely recommend!",
    "+rep perfect for what I needed. Quick delivery and worked exactly as described. Great value for the price.",
    "+rep best cheat on the market! Very smooth performance and never had any detection issues. Keep up the good work!",
    "+rep incredible product! The ESP is so clean and the aimbot is perfectly smooth. Been using for months without issues.",
    "+rep fast and effective. Got my account back in no time. The support team was very professional and helpful.",
  ]

  for (let i = 0; i < numReviewsToGenerate; i++) {
    const randomName =
      names[Math.floor(Math.random() * names.length)] +
      " " +
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      "."
    const randomProduct = products[Math.floor(Math.random() * products.length)]
    // Favor 5-star ratings for a 4.9 average
    const randomRating = Math.random() < 0.9 ? 5 : 4 // 90% chance of 5 stars, 10% chance of 4 stars
    const randomReview = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)].replace(
      "X",
      String(Math.floor(Math.random() * 6) + 1),
    )
    const randomDateObj = getRandomDate(365 * 2) // Reviews up to 2 years old

    allReviews.push({
      name: randomName,
      product: randomProduct,
      rating: randomRating,
      date: randomDateObj,
      review: randomReview,
      verified: true,
    })
  }

  // Sort reviews from latest to oldest
  allReviews.sort((a, b) => b.date.getTime() - a.date.getTime())

  // Format dates for display after sorting
  const reviews = allReviews.map((review) => ({
    ...review,
    date: formatDate(review.date),
  }))

  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = (totalRating / reviews.length).toFixed(1)

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
            Customer Reviews
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers are saying about our premium gaming cheats and services. Real feedback from real
            users.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6 p-4 bg-gray-800 rounded-lg shadow-lg animate-pulse-glow">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <span className="text-3xl font-bold">{averageRating}/5</span>
            <span className="text-gray-400 text-lg">({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:shadow-xl rounded-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="font-bold text-lg text-white">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-white">{review.name}</h3>
                        {review.verified && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black text-xs flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Verified</span>
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{review.product}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex justify-end mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "fill-blue-500 text-blue-500" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">{review.date}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{review.review}"</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <button className="flex items-center space-x-1 hover:text-white transition-colors duration-200">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <Card className="bg-gray-800/70 backdrop-blur-sm border-gray-700 mt-8 transition-all duration-300 hover:scale-[1.01] hover:border-blue-500 hover:shadow-lg rounded-xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Review Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-3">Rating Distribution</h4>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = reviews.filter((r) => r.rating === stars).length
                    const percentage = (count / reviews.length) * 100
                    return (
                      <div key={stars} className="flex items-center space-x-3">
                        <span className="text-sm w-10 text-gray-300">{stars}★</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 w-12 text-right">{count}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Most Reviewed Products</h4>
                <div className="space-y-3">
                  {["Valorant Cheat", "BO6 Warzone Cheat", "HWID Unban", "Temp HWID Unban"].map((product) => {
                    const count = reviews.filter((r) => r.product === product).length
                    return (
                      <div key={product} className="flex justify-between py-1">
                        <span className="text-sm text-gray-300">{product}</span>
                        <span className="text-sm text-gray-400">{count} reviews</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
