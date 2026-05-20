
import { Menu, ArrowRight } from "lucide-react";

const services = [
  {
    title: "EXTERIOR DETAILING",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "INTERIOR DETAILING",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CERAMIC COATING",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "PAINT CORRECTION",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div>
          <h1>SHINE & GLOW✧</h1>
          <span>PREMIUM CAR DETAILING</span>
        </div>

        <button className="menu-btn">
          <Menu size={28} />
        </button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">DETAILING THAT DEFINES EXCELLENCE</p>

          <h2>
            SHINE &
            <br />
            GLOW
          </h2>

          <p className="sub">
            Precision. Passion. Perfection.
            <br />
            Every Detail, Elevated.
          </p>

          <button className="btn">
            BOOK NOW
            <ArrowRight size={18} />
          </button>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
        />
      </section>

      <section className="services">
        <p className="eyebrow">OUR SERVICES</p>

        <h3>EXPERT CARE. PREMIUM RESULTS.</h3>

        <div className="grid">
          {services.map((service) => (
            <div
              className="card"
              key={service.title}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.15)), url(${service.image})`,
              }}
            >
              <div className="card-content">
                <h4>{service.title}</h4>

                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="eyebrow">READY FOR THAT</p>

          <h3>
            SHINE & GLOW
            <br />
            EXPERIENCE?
          </h3>
        </div>

        <img
          src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1600&auto=format&fit=crop"
        />
      </section>
    </div>
  );
}
