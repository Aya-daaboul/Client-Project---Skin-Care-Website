import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import socialMedia from "../assets/social media.png";
import "../css/contactus.css";

export default function Contact() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    mssg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="getTouch">
          <h1> GET IN TOUCH!</h1> <br />
          <h1>+1 (800) 123-4567</h1> <br />
          <h1>Support@lumiere.com</h1> <br />
          <h1>
            Lumiere Headquarters
            <br />
            Coastal City, CA 90210
            <br />
            USA
          </h1> <br />
          <div>
            <img src={socialMedia} alt="social media icons" />
          </div>
        </div>

        <div className="rightDiv">
          <form className="formStyle" onSubmit={handleSubmit}>
            <div className="name">
              <div className="group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={details.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={details.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
            </div>

            <div className="group">
              <label>Subject</label>
              <div className="sub">
                <input
                  type="radio"
                  id="general"
                  name="subject"
                  value="general"
                  onChange={handleChange}
                />
                <label htmlFor="general">General Inquiry</label>

                <input
                  type="radio"
                  id="feedback"
                  name="subject"
                  value="feedback"
                  onChange={handleChange}
                />
                <label htmlFor="feedback">Feedback</label>
              </div>
            </div>

            <div className="group">
              <label htmlFor="mssg">Message</label>
              <textarea
                id="mssg"
                name="mssg"
                value={details.mssg}
                onChange={handleChange}
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
