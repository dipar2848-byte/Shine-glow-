
import "./styles.css";

const services = [
  {
    title: "Ceramic Coating",
    text: "Deep gloss protection with long lasting hydrophobic finish.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Interior Detailing",
    text: "Luxury deep cleaning with premium leather treatment.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Paint Correction",
    text: "Mirror finish paint refinement removing swirl marks.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <div className="app">

      <header className="hero">

        <nav className="nav">
          <div className="logo">
            <h2>SHINE & GLOW</h2>
            <p>PREMIUM DETAILING STUDIO</p>
          </div>

          <button className="nav-btn">BOOK NOW</button>
        </nav>

        <div className="hero-grid">

          <div className="hero-left glass">
            <span>LUXURY CAR DETAILING</span>

            <h1>
              SHINE
              <br />
              & GLOW
            </h1>

            <p>
              Precision detailing crafted for enthusiasts who demand
              perfection, gloss, and elite presentation.
            </p>

            <div className="hero-buttons">
              <button className="gold-btn">GET STARTED</button>
              <button className="outline-btn">VIEW SERVICES</button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop"
              alt=""
            />
          </div>

        </div>
      </header>

      <section className="floating-card">
        <div>
          <h3>500+</h3>
          <p>Vehicles Detailed</p>
        </div>

        <div>
          <h3>5★</h3>
          <p>Client Rating</p>
        </div>

        <div>
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      <section className="about section">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop"
            alt=""
          />
        </div>

        <div className="about-content">
          <span>ABOUT US</span>

          <h2>
            DETAILING
            <br />
            REDEFINED.
          </h2>

          <p>
            Every inch refined with precision and premium products.
            We combine luxury aesthetics with meticulous craftsmanship.
          </p>

          <button className="gold-btn">OUR STORY</button>
        </div>

      </section>

      <section className="services section">

        <div className="section-top">
          <span>OUR SERVICES</span>
          <h2>PREMIUM CARE.</h2>
        </div>

        <div className="service-grid">

          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <img src={item.img} alt="" />

              <div className="service-overlay">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}

        </div>

      </section>

      <section className="banner section">

        <div className="banner-content glass">
          <span>THE DIFFERENCE</span>

          <h2>
            DARK.
            <br />
            CLEAN.
            <br />
            PREMIUM.
          </h2>

          <button className="gold-btn">BOOK NOW</button>
        </div>

      </section>

      <section className="gallery section">

        <div className="gallery-grid">

          <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1400&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1400&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop" />

        </div>

      </section>

      <footer className="footer">
        <h2>SHINE & GLOW</h2>
        <p>Premium automotive detailing experience.</p>
      </footer>

    </div>
  );
}
