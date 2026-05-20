import Navbar from "../components/Navbar";

const services = [
  {
    title: "Ceramic Coating",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Interior Detailing",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Paint Correction",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <div className="page">

      <Navbar />

      <section className="top-title">

        <span>OUR SERVICES</span>
        <h1>PREMIUM CARE</h1>

      </section>

      <section className="cards">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <img src={item.img} />

            <div className="overlay">
              <h2>{item.title}</h2>
            </div>

          </div>
        ))}

      </section>

    </div>
  );
}
