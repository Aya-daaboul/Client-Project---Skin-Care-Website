import React from "react";
import '../css/Testimonials.css'
const testimonials = [
  {
    id: 1,
    text: "I've been using Lumiere’s products for over a year now, and I couldn’t be happier. Their skincare line has transformed my skin, making it smoother and more radiant. I love that they use eco-friendly ingredients and never test on animals. Lumiere’s truly cares about their customers and the planet.",
    image: "https://picsum.photos/50",
  },
  {
    id: 2,
    text: "With sensitive skin, finding the right products is always a challenge. Lumiere’s gentle formulas have been a lifesaver. Their cruelty-free approach and sustainability make me feel good about my choices. My skin has never looked better, thanks to Lumiere!",
    image: "https://picsum.photos/986",
  },
  {
    id: 3,
    text: "Lumiere’s beauty products are a game-changer. Their treatments from their licensed estheticians have made a huge difference in my skin’s health. I appreciate their clean beauty practices and the luxurious feel of their products. I highly recommend Lumiere to anyone looking for quality skincare.",
    image: "https://picsum.photos/444",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt="User" className="testimonial-avatar" />
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;