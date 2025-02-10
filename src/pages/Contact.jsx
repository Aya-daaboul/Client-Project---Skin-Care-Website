import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  const MyComponent = () => {
    const getTouchStyle = {
      color: "#9B738F",
      padding: "10px",
      borderRadius: "6px",
      background: "#E8C6C6",
      margin: "20px",
    };
    const title = {
      margin: "20px",
      padding: "30px",
      display: "flex",
    };
    return (
      <div>
        <div>
          <Header />
        </div>

        <div>
            <div className="container" >
            <div style={getTouchStyle} className="getTouch">
            <h1 style={title}>GET IN TOUCH!</h1>
            <h2 style={title}>+1 (800) 123-4567</h2>
            <h2 style={title}>Support@lumiere.com</h2>
            <h2  style={title}>
            Lumiere Headquarters<br />
            Coastal City, CA 90210<br />
            USA
           </h2>
           </div>
            <div className="Form">
                        
            </div>
           </div>
        </div>
            
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  return <MyComponent />;
}
