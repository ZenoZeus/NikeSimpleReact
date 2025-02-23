import React from "react";

const HeroSection = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
          <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
          <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>

        <div className="shopping">
          <button>Shop Now</button>
          <button
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid black",
            }}
          >
            Category
          </button>
        </div>
        <p style={{ color: "black" }}>Also Available On</p>
        <div className="online-mode">
          <img src=".\srcImages\amazon.png" alt="" />
          <img src=".\srcImages\flipkart.png" alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src=".\srcImages\shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
