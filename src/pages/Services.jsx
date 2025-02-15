import React from "react";
import SkinCareServices from "../components/Services.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/ourservices.css";

function services() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1 style={{ fontSize: "50px", color:"#9B738F", textAlign:"center", margin:"2vh" }}>Our Services</h1>
        <SkinCareServices />
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default services;
