import "./styles.css";

const services = [
  { title: "Exterior Detailing", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" },
  { title: "Interior Detailing", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop" },
  { title: "Ceramic Coating", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop" },
  { title: "Paint Correction", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop" }
];

const gallery = [
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop"
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div>
            <h2>SHINE & GLOW</h2>
            <p>PREMIUM CAR DETAILING</p>
          </div>
          <div className="menu">☰</div>
        </nav>

        <div className="hero-content">
          <div className="left">
            <span>DETAILING THAT DEFINES EXCELLENCE</span>
            <h1>SHINE & GLOW</h1>
            <p>
              Precision. Passion. Perfection.
              <br />
              Every Detail, Elevated.
            </p>
            <button>BOOK NOW →</button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="about card">
        <div className="about-text">
          <span>ABOUT US</span>
          <h2>
            WHERE PASSION MEETS <span>PERFECTION.</span>
          </h2>
          <p>
            At Shine & Glow, we treat your car like our own using premium products and
            expert techniques.
          </p>
          <button>OUR STORY →</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />
      </section>

      <section className="services">
        <span>OUR SERVICES</span>
        <h2>EXPERT CARE. PREMIUM RESULTS.</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt="" />
              <div className="overlay">
                <h3>{service.title}</h3>
                <p>→</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="before-after card">
        <h2>THE DIFFERENCE IS REAL.</h2>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />
      </section>

      <section className="stats card">
        <div><h3>500+</h3><p>CARS DETAILED</p></div>
        <div><h3>5.0</h3><p>RATING</p></div>
        <div><h3>100%</h3><p>SATISFACTION</p></div>
        <div><h3>3+</h3><p>YEARS EXPERIENCE</p></div>
      </section>

      <section className="gallery">
        <span>GALLERY</span>
        <h2>DETAILS THAT SPEAK.</h2>

        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </section>

      <section className="reviews card">
        <h2>TRUSTED BY CAR LOVERS.</h2>

        <div className="review-grid">
          <div className="review">
            <h4>Arjun Mehta</h4>
            <p>“Absolutely unmatched finish and gloss.”</p>
          </div>

          <div className="review">
            <h4>Rohan Singh</h4>
            <p>“Water just slides off like magic.”</p>
          </div>

          <div className="review">
            <h4>Karan Malhotra</h4>
            <p>“Premium experience from start to finish.”</p>
          </div>
        </div>
      </section>

      <section className="cta card">
        <div>
          <span>READY FOR THAT</span>
          <h2>SHINE & GLOW EXPERIENCE?</h2>
          <p>Book your appointment now and give your car the care it deserves.</p>
          <button>BOOK ON WHATSAPP</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />
      </section>

      <footer className="footer">
        <div>
          <h2>SHINE & GLOW</h2>
          <p>Premium Car Detailing</p>
        </div>

        <div>
          <h4>CONTACT</h4>
          <p>+91 98765 43210</p>
          <p>Mumbai, Maharashtra</p>
        </div>
      </footer>
    </div>
  );
}
