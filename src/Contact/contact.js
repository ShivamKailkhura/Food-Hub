import React from "react";
import "./contact.css";
import logo1 from "./whatsapp.png";
import logo2 from "./burger-removebg-preview.png";
import logo3 from "./PngItem_188635.png";
import logo4 from "./client_logo.png";
import logo5 from "./gmail.png";
import logo6 from "./phone-call.png";
<link
  href="https://fonts.googleapis.com/css?family=Readex Pro"
  rel="stylesheet"
></link>;
function contact() {
  return (
    <div className="born">
      <div className="logo">
        <img
          src={logo4}
          alt="Logo"
          style={{ height: "100px", width: "134px" }}
        />
      </div>
      <div className="headline">Contact Us</div>
      <div className="container">
        <div className="box burger">
          <img
            src={logo2}
            style={{
              height: "350px",
              width: "546px",
            }}
            srcset=""
          />
        </div>
        {/* <div className="box coke">{<img src={logo3} alt="" srcset="" />}</div> */}
        <div className="box b1">
          <img
            src={logo5}
            alt="Gmail"
            style={{ height: "10rem", width: "10rem" }}
          />
          <a
            href="mailto:hkahariyana@gmail.com"
            style={{ textAlign: "center" }}
          >
            FoodHub@gmail.com
          </a>
        </div>
        <div className="box b2">
          <img
            src={logo1}
            alt="Whatsapp"
            style={{ height: "10rem", width: "10rem" }}
          />
          <a href="#" style={{ textAlign: "center" }}>
            +91 ##########
          </a>
        </div>
        <div className="box b3">
          <img
            src={logo6}
            style={{ height: "100px", width: "100px" }}
            alt="Phone"
          />
          <div className="num" style={{ textAlign: "center" }}>
            +91 ##########
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
