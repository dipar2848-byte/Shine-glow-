import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
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

        <Link to="/" className="back-btn">
          <ArrowLeft size={18} />
          HOME
        </Link>

      </header>

      <section className="work-page-hero">

        <p className="eyebrow">
          OUR WORK
        </p>

        <h2>
          RESULTS THAT
          <br />
          SPEAK FOR
          <br />
          <span>THEMSELVES.</span>
        </h2>

        <p className="work-page-sub">
          Premium detailing transformations and customer experiences will be showcased here.
        </p>

      </section>

      <section className="work-showcase">

        <div className="work-placeholder">
          <h3>COMING SOON</h3>

          <p>
            Future ceramic coating projects, interior detailing transformations, and customer reviews will appear here.
          </p>
        </div>

        <div className="work-placeholder">
          <h3>CLIENT TESTIMONIALS</h3>

          <p>
            Verified customer experiences and premium vehicle transformations will be updated regularly.
          </p>
        </div>

      </section>

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