import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">

      <div className="logo">
        <h1>SHINE & GLOW</h1>
        <p>PREMIUM DETAILING</p>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}
