import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">

      <Navbar />

      <section className="hero">

        <div className="hero-left glass">

          <span>LUXURY DETAILING EXPERIENCE</span>

          <h1>
            SHINE
            <br />
            & GLOW
          </h1>

          <p>
            Precision automotive detailing inspired by elite editorial luxury design.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="gold-btn">
              VIEW SERVICES
            </Link>

            <Link to="/gallery" className="outline-btn">
              EXPLORE GALLERY
            </Link>

          </div>

        </div>

        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1800&auto=format&fit=crop"/>
        </div>

      </section>

      <section className="floating">

        <div>
          <h2>500+</h2>
          <p>CARS DETAILED</p>
        </div>

        <div>
          <h2>5★</h2>
          <p>CLIENT RATING</p>
        </div>

        <div>
          <h2>3+</h2>
          <p>YEARS EXPERIENCE</p>
        </div>

      </section>

      <section className="split">

        <div className="split-image">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"/>
        </div>

        <div className="split-content">

          <span>ABOUT US</span>

          <h2>DETAILING REDEFINED.</h2>

          <p>
            Every inch perfected with premium products and obsessive craftsmanship.
          </p>

          <Link to="/contact" className="gold-btn">
            BOOK NOW
          </Link>

        </div>

      </section>

    </div>
  );
}
