import {
  Menu,
  ArrowRight,
  Gem,
  ShieldCheck,
  Clock3,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "EXTERIOR DETAILING",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "INTERIOR DETAILING",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CERAMIC COATING",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "PAINT CORRECTION",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  },
];

const reviews = [
  {
    name: "Daniel R.",
    text: "Absolutely unreal finish. My car looked better than showroom condition.",
  },
  {
    name: "Marcus J.",
    text: "Professional service, incredible attention to detail, and amazing communication.",
  },
  {
    name: "Chris M.",
    text: "Best detailing experience I’ve had. Ceramic coating looks insane.",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <h1>SHINE & GLOW✧</h1>
          <span>PREMIUM CAR DETAILING</span>
        </div>

        <button className="menu-btn">
          <Menu size={24} />
        </button>
      </header>

      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">DETAILING THAT DEFINES EXCELLENCE</p>

          <h2>
            SHINE &
            <br />
            GLOW
          </h2>

          <p className="hero-sub">
            Precision. Passion. Perfection.
            <br />
            Every Detail, Elevated.
          </p>

          <div className="hero-actions">
            <button className="gold-outline">
              BOOK NOW
              <ArrowRight size={18} />
            </button>

            <button className="ghost-btn">
              <Phone size={18} />
              CALL NOW
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </section>

      <section className="stats">
        <div>
          <h3>500+</h3>
          <span>CARS DETAILED</span>
        </div>

        <div>
          <h3>5.0</h3>
          <span>AVERAGE RATING</span>
        </div>

        <div>
          <h3>100%</h3>
          <span>CLIENT SATISFACTION</span>
        </div>
      </section>

      <section className="services">
        <p className="eyebrow">OUR SERVICES</p>

        <h3 className="section-title">
          EXPERT CARE.
          <br />
          PREMIUM RESULTS.
        </h3>

        <div className="services-grid">
          {services.map((item) => (
            <div
              className="service-card"
              key={item.title}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.15)), url(${item.image})`,
              }}
            >
              <div className="service-inner">
                <div className="icon-circle">
                  <ShieldCheck size={18} />
                </div>

                <h4>{item.title}</h4>

                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <p className="eyebrow center">WHY CLIENTS TRUST US</p>

        <div className="why-grid">
          <div className="why-item">
            <Gem size={28} />
            <h5>PREMIUM PRODUCTS</h5>
          </div>

          <div className="why-item">
            <Star size={28} />
            <h5>EXPERT TECHNICIANS</h5>
          </div>

          <div className="why-item">
            <ShieldCheck size={28} />
            <h5>ATTENTION TO DETAIL</h5>
          </div>

          <div className="why-item">
            <Clock3 size={28} />
            <h5>FAST TURNAROUND</h5>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="reviews-top">
          <div>
            <p className="eyebrow">CLIENT TESTIMONIALS</p>

            <h3 className="section-title">
              TRUSTED BY
              <br />
              CAR ENTHUSIASTS.
            </h3>
          </div>

          <div className="rating">
            ★★★★★
            <span>5.0 Rating</span>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.name}>
              <div className="review-user">
                <div className="avatar"></div>

                <div>
                  <h4>{review.name}</h4>
                  <span>Verified Customer</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>

              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta card">
        <div className="cta-text">
          <p className="eyebrow">READY TO TRANSFORM YOUR CAR?</p>

          <h3>
            EXPERIENCE
            <br />
            <span>SHINE & GLOW.</span>
          </h3>

          <p>
            Book your premium detailing appointment today and give your car the luxury treatment it deserves.
          </p>

          <div className="cta-actions">
            <button className="gold-btn">
              <MessageCircle size={18} />
              BOOK ON WHATSAPP
            </button>

            <button className="ghost-btn">
              <Phone size={18} />
              CALL NOW
            </button>
          </div>
        </div>

        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" />
      </section>
    </div>
  );
}