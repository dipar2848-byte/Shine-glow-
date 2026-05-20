import Navbar from "../components/Navbar";

export default function Gallery() {
  return (
    <div className="page">

      <Navbar />

      <section className="top-title">

        <span>SHOWCASE</span>
        <h1>OUR GALLERY</h1>

      </section>

      <section className="gallery-grid">

        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1400&auto=format&fit=crop"/>
        <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1400&auto=format&fit=crop"/>
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"/>
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"/>

      </section>

    </div>
  );
}
