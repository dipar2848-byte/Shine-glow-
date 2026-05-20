import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <p className="mini-text">
            PREMIUM AUTO DETAILING
          </p>

          <h1>
            SHINE
            <br />
            & GLOW
          </h1>

          <div className="hero-bottom">

            <p className="hero-description">
              Luxury automotive detailing crafted with precision,
              depth and editorial-grade presentation.
            </p>

            <button>
              BOOK APPOINTMENT
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800&auto=format&fit=crop"
            alt=""
          />

        </div>

      </section>

    </div>
  );
}