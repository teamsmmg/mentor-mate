"use client"
import {  Link } from "react-router-dom"

import { useState, useEffect } from "react"
import "./css/landing-page.css"


const LandingPage= () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div >
  
      <Navigation />
      <HeroSection />
      <ExpertsPlatform />
      <FeaturesSection />
      <TestimonialsSection />
      <EarnConvertSection />

     
    </div>
  )
}

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading MentorMate...</p>
      </div>
    </div>
  )
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%282%29-vOFdsq6Q1bP3EOhhmGrNX0kbxo0Gbi.png"
              alt="MentorMate Logo"
              className="logo-img"
            />
            <span className="logo-text">MentorMate</span>
          </div>
          <div className="nav-menu">
            <div className="nav-item dropdown">
              <span>Use Cases</span>
              <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="nav-item">Search</div>
             <Link to="/mentor-listing" className="nav-item">
        Listing
      </Link>
            <div className="nav-item">Pricing</div>
          </div>
        </div>
        <div className="nav-right">
         <Link to="/login">
        <button className="sign-in-btn">Sign In</button>
      </Link>

      <Link to="/join-as-expert">
        <button className="start-selling-btn">Join As Expert</button>
      </Link>
        </div>
      </div>
    </nav>
  )
}

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            A Professional
            <br />
            Storefront for
            <br />
            Your Knowledge
          </h1>
          <div className="search-section">
            <div className="search-bar">
              <input type="text" placeholder="Search for any service..." className="search-input" />
              <button className="search-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="service-tags">
              <button className="service-tag">
                website development
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="service-tag">
                architecture & interior design
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="service-tag">
                UGC videos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="service-tag">
                video editing
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="service-tag new-tag">
                vibe coding
                <span className="new-badge">NEW</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="social-proof">
            <div className="proof-item">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <span>100k+ reviews</span>
            </div>
            <div className="proof-item">
              <span>1m+ professionals</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <ProfessionalCards />
        </div>
      </div>
    </section>
  )
}

const ProfessionalCards = () => {
  const professionals = [
    {
      name: "Mitchell Clements",
      title: "Design Leader",
      tag: "nCino",
      color: "orange",
      image: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    },
    {
      name: "Radhika Agrawal",
      title: "Experience Design",
      tag: "Design Consultant",
      color: "blue",
      image: "https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg",
    },
    {
      name: "Prakriti & Ashish",
      title: "Travelers",
      tag: "Escape to Landscapes",
      color: "yellow",
      image: "https://img.freepik.com/free-photo/couple-traveling-together_23-2149153896.jpg",
    },
    {
      name: "Josh Burns Tech",
      title: "SQL Server DBA",
      tag: "Freelancer",
      color: "blue",
      image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-hips_176420-18743.jpg",
    },
    {
      name: "Aditi Paul, PhD",
      title: "Helping immigrants",
      tag: "Dr. Paul & Company",
      color: "red",
      image:
        "https://img.freepik.com/free-photo/beautiful-young-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg",
    },
    {
      name: "Vineet Joglekar",
      title: "Engineering Manager",
      tag: "Google",
      color: "green",
      image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-hips_176420-18743.jpg",
    },
    {
      name: "Sarah Chen",
      title: "UX Designer",
      tag: "Freelancer",
      color: "purple",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    },
    {
      name: "Marcus Johnson",
      title: "Full Stack Developer",
      tag: "Tech Lead",
      color: "teal",
      image: "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg",
    },
    {
      name: "Elena Rodriguez",
      title: "Marketing Strategist",
      tag: "Growth Expert",
      color: "pink",
      image: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg",
    },
  ]

  const firstColumn = professionals.slice(0, Math.ceil(professionals.length / 2))
  const secondColumn = professionals.slice(Math.ceil(professionals.length / 2))

  return (
    <div className="professional-cards">
      <div className="cards-column column-up">
        <div className="cards-track">
          {[...firstColumn, ...firstColumn].map((professional, index) => (
            <div key={`col1-${index}`} className={`professional-card ${professional.color}`}>
              <div className="card-image">
                <img src={professional.image || "/placeholder.svg"} alt={professional.name} />
                <div className="card-tag">{professional.tag}</div>
              </div>
              <div className="card-content">
                <h3 className="card-name">{professional.name}</h3>
                <p className="card-title">{professional.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cards-column column-down">
        <div className="cards-track">
          {[...secondColumn, ...secondColumn].map((professional, index) => (
            <div key={`col2-${index}`} className={`professional-card ${professional.color}`}>
              <div className="card-image">
                <img src={professional.image || "/placeholder.svg"} alt={professional.name} />
                <div className="card-tag">{professional.tag}</div>
              </div>
              <div className="card-content">
                <h3 className="card-name">{professional.name}</h3>
                <p className="card-title">{professional.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ExpertsPlatform = () => {
  const categories = [
    { name: "Career", active: true },
    { name: "Consulting", active: false },
    { name: "Content", active: false },
    { name: "Cybersecurity", active: false },
    { name: "Data & AI", active: false },
    { name: "Design", active: false },
    { name: "Finance", active: false },
    { name: "HR", active: false },
    { name: "Law", active: false },
    { name: "Marketing", active: false },
    { name: "Mental Health", active: false },
    { name: "Product", active: false },
    { name: "Software", active: false },
    { name: "Study Abroad", active: false },
    { name: "Best Selling", active: false },
    { name: "Supply Chain", active: false },
    { name: "Others", active: false },
  ]

  const experts = [
    {
      name: "Kavach Khanna",
      title: "Mentor You Always Needed",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
    {
      name: "Prashant Verma",
      title: "Building World-Class Scrum Masters, One Sprint at a Time",
      image:
        "https://img.freepik.com/free-photo/pleased-young-male-barber-wearing-uniform-holding-hair-clippers-comb_141793-17050.jpg",
    },
    {
      name: "Abhishek Srivastava",
      title: "NOTE: If you're not prepared to confront some harsh truths about your career...",
      image: "https://img.freepik.com/free-photo/young-man-with-laptop-books_23-2148898664.jpg",
    },
    {
      name: "Shreya Mehta",
      title: "Talent Acquisition / Recruiting/ HR / Startup Hiring",
      image: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg",
    },
    {
      name: "Maveesh Velayudhan",
      title: "Education & Career Advisor",
      image: "https://img.freepik.com/free-photo/man-mountains-nature-fresh-air-travel_1303-14312.jpg",
    },
  ]

  return (
    <section className="experts-platform">
      <div className="experts-container">
        <div className="experts-header">
          <h2 className="experts-title">
            The <span className="title-highlight">Go-To Platform</span> for Experts
          </h2>
          <p className="experts-subtitle">
            Experts from every niche use MentorMate to build trust, grow revenue, and stay booked.
          </p>
        </div>

        <div className="categories-section">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <button key={index} className={`category-tag ${category.active ? "active" : ""}`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-image">
                <img src={expert.image || "/placeholder.svg"} alt={expert.name} />
              </div>
              <div className="expert-info">
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-title">{expert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Offer 1:1 sessions",
      description:
        "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else",
      expanded: true,
    },
    {
      number: "02",
      title: "Setup Priority DM in seconds",
      description: "",
      expanded: false,
    },
    {
      number: "03",
      title: "Host a webinar",
      description: "",
      expanded: false,
    },
    {
      number: "04",
      title: "Bundle your services",
      description: "",
      expanded: false,
    },
    {
      number: "05",
      title: "Sell courses & products",
      description: "",
      expanded: false,
    },
  ]

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-left">
          <div className="booking-mockup">
            <div className="mockup-header">
              <div className="profile-section">
                <div className="profile-avatar">
                  <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt="Profile" />
                </div>
                <div className="profile-info">
                  <h3>Book session</h3>
                  <p>Select date & time</p>
                </div>
              </div>
            </div>
            <div className="calendar-section">
              <div className="date-options">
                <div className="date-option">
                  <span className="day">Fri</span>
                  <span className="date">29 Sep</span>
                </div>
                <div className="date-option selected">
                  <span className="day">Sat</span>
                  <span className="date">30 Sep</span>
                </div>
                <div className="date-option">
                  <span className="day">Sun</span>
                  <span className="date">31 Sep</span>
                </div>
                <div className="date-option">
                  <span className="day">Mon</span>
                  <span className="date">01 Oct</span>
                </div>
              </div>
            </div>
            <div className="time-section">
              <p className="next-available">Next available</p>
              <div className="time-slot">07:00pm, Tue 29st</div>
              <button className="book-button">Book</button>
            </div>
          </div>
        </div>

        <div className="features-right">
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item ${feature.expanded ? "expanded" : ""}`}>
                <div className="feature-header">
                  <span className="feature-number">{feature.number}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <svg className="feature-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {feature.expanded && (
                  <div className="feature-description">
                    <p>{feature.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!",
      name: "Aishwarya Srinivasan",
      title: "LinkedIn Top Voice",
      image: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg",
    },
    {
      quote: "The entire experience is just so seamless. My followers love it",
      name: "Joerg Storm",
      title: "300K on LinkedIn",
      image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-hips_176420-18743.jpg",
    },
    {
      quote: "MentorMate is my go-to platform for scheduling 1:1 sessions and hosting webinars!",
      name: "Xinran Waibel",
      title: "Founder of Data Engineer Things",
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Don't Just Take Our Word for It</h2>
        <div className="testimonials-strip">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const EarnConvertSection = () => {
  return (
    <section className="earn-convert-section">
      <div className="earn-convert-container">
        <h2 className="earn-convert-title">Earn & Convert more with MentorMate</h2>

        <div className="earn-convert-grid">
          {/* Top Row */}
          <div className="convert-card pink-card small-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="card-stats">2X</div>
            <div className="card-text">
              convert better with <strong>localised currency</strong>
            </div>
          </div>

          <div className="convert-card purple-card wide-card">
            <div className="testimonial-bubbles">
              <div className="bubble">
                <div className="bubble-avatar">
                  <img
                    src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg"
                    alt="User"
                  />
                </div>
                <span>5/5 "Loved the session"</span>
              </div>
              <div className="bubble">
                <div className="bubble-avatar">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-hips_176420-18743.jpg"
                    alt="User"
                  />
                </div>
                <span>5/5 "Best advice ever"</span>
              </div>
            </div>
            <div className="card-stats">40%</div>
            <div className="card-text">
              increase in conversion with <strong>testimonial showcase</strong>
            </div>
          </div>

          <div className="convert-card green-card medium-card">
            <div className="country-flags">
              <div className="flag-badge">🇮🇳 100$</div>
              <div className="flag-badge">🇺🇸 400$</div>
            </div>
            <div className="card-stats">upto 4X</div>
            <div className="card-text">
              your earnings with <strong>country based pricing</strong>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="convert-card blue-card large-card">
            <div className="payment-icons">
              <div className="paypal-logo">PayPal</div>
              <div className="bank-transfer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Bank transfer
              </div>
            </div>
            <div className="card-stats large-stats">Instant payouts</div>
            <div className="card-text">No payment cycle, no fuss, withdraw directly to bank account</div>
          </div>

          <div className="convert-card beige-card smallest-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="card-stats">13%</div>
            <div className="card-text">
              uplift in bookings with <strong>abandon cart emails</strong>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default LandingPage
