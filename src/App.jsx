import {
  Menu,
  ArrowRight,
  Gem,
  ShieldCheck,
  Clock3,
  Star,
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

const gallery = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
];

export default function App() {
  return (
    <div className="app">

      <header className="navbar">

        <div className="logo-wrap">

          <img
            src="https://i.postimg.cc/d1JCTQrt/IMG-20260521-113338.jpg"
            alt="logo"
            className="logo-img"
          />

          <div className="logo">
            <h1>SHINE N GLOW✧</h1>
            <span>PREMIUM CAR DETAILING</span>
          </div>

        </div>

        <button className="menu-btn">
          <Menu size={24} />
        </button>

      </header>

      <section className="hero">

        <div className="hero-left">

          <p className="eyebrow">
            DETAILING THAT DEFINES EXCELLENCE
          </p>

          <h2>
            SHINE N
            <br />
            GLOW
          </h2>

          <p className="hero-sub">
            Precision. Passion. Perfection.
            <br />
            Every Detail, Elevated.
          </p>

          <div className="hero-buttons">

            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20a%20detailing%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-outline"
            >
              BOOK NOW
              <ArrowRight size={18} />
            </a>

            <a
              href="#our-work"
              className="dark-btn"
            >
              OUR WORK
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop" />

        </div>

        <div className="slider">
          <span>01</span>
          <div className="line"></div>
          <span>03</span>
        </div>

      </section>

      <section className="our-work-page" id="our-work">

        <div className="work-header">

          <p className="eyebrow">
            OUR WORK
          </p>

          <h3 className="section-title">
            RESULTS THAT
            <br />
            SPEAK FOR
            <br />
            <span>THEMSELVES.</span>
          </h3>

          <p className="work-sub">
            Premium detailing transformations and client experiences will be showcased here soon.
          </p>

        </div>

        <div className="empty-showcase">

          <div className="empty-card">
            <h4>COMING SOON</h4>

            <p>
              Real customer transformations, reviews, and premium detailing showcases will appear here.
            </p>
          </div>

          <div className="empty-card">
            <h4>CLIENT TESTIMONIALS</h4>

            <p>
              Verified customer experiences and detailing results will be updated regularly.
            </p>
          </div>

        </div>

      </section>

      <section className="about card">

        <div className="text">

          <p className="eyebrow">
            ABOUT US
          </p>

          <h3>
            WHERE PASSION
            <br />
            MEETS
            <br />
            <span>PERFECTION.</span>
          </h3>

          <p>
            At Shine N Glow, we use premium products and expert detailing techniques to bring out the true beauty in every curve.
          </p>

          <button className="link-btn">
            OUR STORY
            <ArrowRight size={18} />
          </button>

        </div>

        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop" />

      </section>

      <section className="services">

        <p className="eyebrow">
          OUR SERVICES
        </p>

        <h3 className="section-title">
          EXPERT CARE.
          PREMIUM RESULTS.
        </h3>

        <div className="services-grid">

          {services.map((item) => (
            <div
              className="service-card"
              key={item.title}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.1)), url(${item.image})`,
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

      <section className="before">

        <p className="eyebrow">
          BEFORE & AFTER
        </p>

        <h3 className="section-title">
          THE DIFFERENCE IS REAL.
        </h3>

        <div className="before-slider">

          <img
            className="before-image"
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop"
          />

          <img
            className="after-image"
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
          />

          <div className="slider-handle">
            ‹ ›
          </div>

        </div>

      </section>

      <section className="why">

        <p className="eyebrow center">
          WHY CHOOSE US?
        </p>

        <div className="why-grid">

          <div className="why-item">
            <Gem size={28} />
            <h5>PREMIUM PRODUCTS</h5>
          </div>

          <div className="why-item">
            <Star size={28} />
            <h5>EXPERT PROFESSIONALS</h5>
          </div>

          <div className="why-item">
            <ShieldCheck size={28} />
            <h5>ATTENTION TO DETAIL</h5>
          </div>

          <div className="why-item">
            <Clock3 size={28} />
            <h5>ON TIME, EVERY TIME</h5>
          </div>

        </div>

        <div className="thumbs">

          {gallery.map((img, i) => (
            <img key={i} src={img} />
          ))}

        </div>

      </section>

      <section className="cta card">

        <div className="cta-text">

          <p className="eyebrow">
            READY FOR THAT
          </p>

          <h3>
            SHINE N GLOW
            <br />
            <span>EXPERIENCE?</span>
          </h3>

          <p>
            Book your appointment now and give your car the care it deserves.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20a%20detailing%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            BOOK ON WHATSAPP
          </a>

        </div>

        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" />

      </section>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="floating-wa"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      <footer className="footer">

        <img
          src="https://i.postimg.cc/d1JCTQrt/IMG-20260521-113338.jpg"
          alt="footer logo"
          className="footer-logo"
        />

        <h2>SHINE N GLOW✧</h2>

        <p>
          Precision. Passion. Perfection.
        </p>

      </footer>

    </div>
  );
}