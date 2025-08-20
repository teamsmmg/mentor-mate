"use client"

import { useState, useEffect } from "react"
import { Search, Star, ArrowRight, ChevronDown, Menu, X } from "lucide-react"

// Loading Screen Component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#7e81fb] mx-auto mb-4"></div>
      <p className="text-[#5c59b1] font-medium">Loading MentorMate...</p>
    </div>
  </div>
)

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%282%29-9g4laL1EiPmzEURRA8f5yfZmMIVaJ1.png"
              alt="MentorMate"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold text-[#5c59b1]">MentorMate</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Use Cases
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Search
            </a>
            <a href="/mentor-listing" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Listing
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Pricing
            </a>
            <button className="text-[#7e81fb] hover:text-[#5c59b1] transition-colors">Sign In</button>
            <button className="bg-[#7e81fb] text-white px-4 py-2 rounded-lg hover:bg-[#5c59b1] transition-colors">
              Start Listing
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700">
                Use Cases
              </a>
              <a href="#" className="text-gray-700">
                Search
              </a>
              <a href="/mentor-listing" className="text-gray-700">
                Listing
              </a>
              <a href="#" className="text-gray-700">
                Pricing
              </a>
              <button className="text-[#7e81fb] text-left">Sign In</button>
              <button className="bg-[#7e81fb] text-white px-4 py-2 rounded-lg w-fit">Start Listing</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              A Professional
              <br />
              Storefront for
              <br />
              <span className="text-[#7e81fb]">Your Knowledge</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you offer—consultations, digital products, webinars and services—packaged in one trusted link
              your clients take seriously.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                Start My Page <ArrowRight className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">100k+ reviews</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">from professionals</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Profile Cards */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Rashika Agarwal</h3>
              <p className="text-sm opacity-90">Experience Designer</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Mehul Chaudhary</h3>
              <p className="text-sm opacity-90">PM at Swiggy Instamart</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Jatin Batra Tech</h3>
              <p className="text-sm opacity-90">SDE-III at Zomato</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Chinmaya Patra</h3>
              <p className="text-sm opacity-90">CTO Swiggy Tech</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Vikrant Agarwal</h3>
              <p className="text-sm opacity-90">Engineering Manager</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-1">Varun Kohli</h3>
              <p className="text-sm opacity-90">Career Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Search Section Component
const SearchSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search for mentors, topics, or expertise..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-[#7e81fb] focus:outline-none transition-colors"
              />
            </div>
          </div>
          <button className="bg-[#7e81fb] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#5c59b1] transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

// Platform Section Component
const PlatformSection = () => {
  const categories = [
    "Career",
    "Consulting",
    "Content",
    "Cybersecurity",
    "Data & AI",
    "Design",
    "Finance",
    "HR",
    "Law",
    "Marketing",
    "Mental Health",
    "Product",
    "Software",
    "Study Abroad",
    "Best Selling",
    "Supply Chain",
    "Others",
  ]

  const experts = [
    {
      name: "Kaushal Khanma",
      title: "Product Tech Expert",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Prashant Verma",
      title: "Building World-Class Products",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Abhishek Srivastava",
      title: "FAANG & Startup Expert",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Shreya Mehta",
      title: "Career Navigation Expert",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Manmath Vidyarthan",
      title: "Ex-product & Growth",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-[#7e81fb]">Go-To Platform</span> for Experts
          </h2>
          <p className="text-xl text-gray-600">
            Experts from every niche use MentorMate to build trust, grow revenue, and stay booked.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-[#7e81fb] hover:text-white transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={expert.image || "/placeholder.svg"}
                alt={expert.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{expert.name}</h3>
              <p className="text-sm text-gray-600">{expert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Quick Setup Section Component
const QuickSetupSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Create your
              <br />
              MentorMate page in a
              <br />
              <span className="text-orange-500">flash</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Start earning $$ by the time you finish reading our website</p>
            <button className="bg-[#7e81fb] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5c59b1] transition-colors flex items-center gap-2">
              Launch your page <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">Victoria Malesana</h3>
                    <p className="text-sm text-gray-600">Powered by MentorMate</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <span className="text-sm">Share your Link</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <span className="text-sm text-gray-400">Book Discovery Call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <span className="text-sm text-gray-400">Book Coaching Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "Offer 1:1 sessions",
      description:
        "Monetize sessions, consultations, discovery calls - do what you do best. We take care of everything else.",
      isOpen: true,
    },
    {
      title: "Setup Priority DM in seconds",
      description: "Get priority access to direct messages and consultations.",
      isOpen: false,
    },
    {
      title: "Host a webinar",
      description: "Create and host engaging webinars for your audience.",
      isOpen: false,
    },
    {
      title: "Bundle your services",
      description: "Package multiple services together for better value.",
      isOpen: false,
    },
    {
      title: "Sell courses & products",
      description: "Monetize your expertise through digital products.",
      isOpen: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">Book session</h3>
                    <p className="text-sm text-gray-600">with Victoria</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button className="bg-gray-100 p-2 rounded text-sm">10 AM</button>
                <button className="bg-[#7e81fb] text-white p-2 rounded text-sm">11 AM</button>
                <button className="bg-gray-100 p-2 rounded text-sm">12 PM</button>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold">Continue</button>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#7e81fb] text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      {feature.isOpen && <p className="text-gray-600 mt-1">{feature.description}</p>}
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${feature.isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!",
      author: "Himanshu Karnawat",
      title: "Founder at Karnawat",
    },
    {
      text: "The entire experience is just so seamless. My followers love it too!",
      author: "Garry Bansal",
      title: "Career Coach",
    },
    {
      text: "MentorMate is my go-to platform for scheduling 1:1 sessions and hosting webinars.",
      author: "Karan Wadhel",
      title: "Founder of Karan Wadhel Yoga",
    },
    {
      text: "All my monetization now happens in one place.",
      author: "Payal S Goenka",
      title: "Tarot on Instagram",
    },
    {
      text: "The team is extremely helpful and quick to act on feedback. They really care about their users.",
      author: "Lorraine Lee",
      title: "Lawyer, 500+ on LinkedIn",
    },
    {
      text: "I love MentorMate! It has made it seamless to schedule mentoring sessions and manage my calendar.",
      author: "Deepika S",
      title: "Global Tech Lead in Energy Industry",
    },
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Don't Just Take Our Word for It</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7e81fb] to-[#5c59b1] rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section Component
const StatsSection = () => {
  const stats = [
    {
      title: "2X",
      subtitle: "boosted earnings",
      description: "vs traditional discovery",
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "40%",
      subtitle: "more",
      description: "with testimonial placement",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "upto 6X",
      subtitle: "your earnings",
      description: "with priority DM + weekly events",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Instant payouts",
      subtitle: "No waiting period",
      description: "Money in bank instantly",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "13%",
      subtitle: "commission",
      description: "vs 30% on other platforms",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Get Discovered",
      subtitle: "Automatic Exposure",
      description: "on new MentorMate regularly",
      color: "from-teal-400 to-teal-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#7e81fb]">Earn & Convert</span> more with MentorMate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white`}>
              <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
              <p className="text-lg font-semibold mb-1">{stat.subtitle}</p>
              <p className="text-sm opacity-90">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "What is MentorMate?",
      answer:
        "MentorMate is a platform that helps experts monetize their knowledge through consultations, courses, and services.",
    },
    {
      question: "Can I conduct paid sessions?",
      answer: "Yes, you can conduct paid 1:1 sessions, group sessions, and webinars through our platform.",
    },
    {
      question: "How much can I charge for my sessions?",
      answer: "You can set your own rates based on your expertise and market demand.",
    },
    {
      question: "How do the payments work?",
      answer: "We handle all payments securely and transfer earnings to your account with minimal fees.",
    },
    {
      question: "What are the transaction charges?",
      answer: "We charge a competitive 13% commission on successful transactions.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-xl text-gray-600">
            Can't find the answer you are looking for?
            <a href="#" className="text-[#7e81fb] hover:underline ml-1">
              Reach out to us
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%282%29-9g4laL1EiPmzEURRA8f5yfZmMIVaJ1.png"
                alt="MentorMate"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold">MentorMate</span>
            </div>
            <p className="text-gray-400 mb-6">Connect with top mentors and grow your career.</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2024 MentorMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function MentorMateLanding() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SearchSection />
      <PlatformSection />
      <QuickSetupSection />
      <FeaturesSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
