import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import socialMedia from "../assets/social media.png";

export default function Contact() {
  const container = {
    color: "#9B738F",
    padding: "10px",
    borderRadius: "6px",
    background: "#E8C6C6",
      margin: "20px",
      display: "flex",
    flexDirection:"row"
  };
  const title = {
    margin: "20px",
    padding: "30px",
  };
  const getTouchStyle = {
    flex: 1,
    padding: "10px",
    margin: "10px",
    borderRight: '1px solid #AC3A4E'
  };
  const rightDivStyle = {
    flex: 1,
    padding: "10px",
    margin: "10px",
    alignItems: "center",
  };
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
  };

  return (
    <div>
      <Header />
      <div className="container" style={container}>
        <div style={getTouchStyle} className="getTouch">
          <h1 style={title}>GET IN TOUCH!</h1>
          <h2 style={title}>+1 (800) 123-4567</h2>
          <h2 style={title}>Support@lumiere.com</h2>
          <h2 style={title}>
            Lumiere Headquarters
            <br />
            Coastal City, CA 90210
            <br />
            USA
          </h2>
          <div>
            <img src={socialMedia} alt="social media icons" />
          </div>
        </div>
        <div style={rightDivStyle}>
          <form style={formStyle}>
            <div style={inputStyle}>
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div style={inputStyle}>
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
            <div style={inputStyle}>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div style={inputStyle}>
              <label>Subject</label>
              <select name="subject">
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div style={inputStyle}>
              <label>Message</label>
              <textarea name="message"></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "50px",
                height: "30px",
                  padding: "5px",
              }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
