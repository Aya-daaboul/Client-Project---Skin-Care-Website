import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import proimg1 from "../assets/proimg1.png";
import proimg2 from "../assets/proimg2.png";
import proimg3 from "../assets/proimg3.png";
import proimg4 from "../assets/proimg4.png";
import proimg5 from "../assets/proimg5.png";
import "../css/ourservices.css";
const ServiceCard = ({ imgSrc, title, descrip }) => {
  return (
    <div className="service-card">
      <img src={imgSrc} alt={title} className="service-card-img" />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{descrip}</p>
      </div>
    </div>
  );
};
const Products = () => {
  const products = [
    { id: 1, name: "Body & Face Scrubs", image: proimg1 },
    { id: 2, name: "Body Lotions", image: proimg2 },
    { id: 3, name: "Radial Serums", image: proimg3 },
    { id: 4, name: "Facial Cream", image: proimg4 },
    { id: 5, name: "Fruit Face Masks", image: proimg5 },
  ];
  return (
    <div className="products-container">
      {/* Title */}
      <h2 className="products-title">
        Our <span className="highlight">Natural</span> <i>Products</i>
      </h2>
      {/* Product Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
         </div>
    </div>
      
  );
};
// 🟢 Last Section Component
const LastSec = () => {
  return (
    <div className="lastsec">
      <h2>Looking for a Custom Skin Solution?</h2> <br />
      <p>
        Not sure which product or treatment is right for you? Get expert
        guidance tailored to your skin’s unique needs.
      </p> <br />
      <button className="bookcons" onClick={() => alert("Booking Consultation!")}>
        Book a Consultation
      </button>
    </div>
  ); 
};
// 🟢 Services Component
const Services = () => {
  return (
    <div>
      <div className="services-container">
        <ServiceCard
          imgSrc={img1}
          title="Facial Treatment"
          descrip="Customized treatments to refresh and rejuvenate your skin."
        />
        <ServiceCard
          imgSrc={img2}
          title="Micro needling"
          descrip="Stimulates collagen production for smoother, youthful skin."
        />
        <ServiceCard
          imgSrc={img3}
          title="Skin Analysis"
          descrip="In-depth analysis to understand your unique skin needs."
        />
        <ServiceCard
          imgSrc={img4}
          title="Facial Spa "
          descrip="A luxurious, relaxing experience for glowing, healthy skin."
        />
      </div>
      {/* Products Section */}
      <div>
        <Products />
      </div>
      
        <div className="back">
          <button className="btn" onClick={() => alert("order now!")}>
            Order Now!
          </button>
        </div>
      
      <div>
        <LastSec />
      </div>
    </div>
  );
};
export default Services;