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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-title">
        Our <span className="highlight">Natural</span> <i>Products</i>
      </h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <div className="services-container">
        <ServiceCard imgSrc={img1} title="Service One" descrip="This is the first service." />
        <ServiceCard imgSrc={img2} title="Service Two" descrip="This is the second service." />
        <ServiceCard imgSrc={img3} title="Service Three" descrip="This is the third service." />
        <ServiceCard imgSrc={img4} title="Service Four" descrip="This is another service." />
      </div>

      {/* Products Section */}
      <Products />

      <div className="back">
        <button className="btn" onClick={() => alert("order now!")}>Order Now!</button>
      </div>
    </div>
  );
};

export default Services;

