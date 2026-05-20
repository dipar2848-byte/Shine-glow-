import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="page">

      <Navbar />

      <section className="contact-box glass">

        <span>BOOK APPOINTMENT</span>

        <h1>CONTACT US</h1>

        <input placeholder="Your Name" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Tell us about your car"></textarea>

        <button className="gold-btn">
          SEND REQUEST
        </button>

      </section>

    </div>
  );
}
