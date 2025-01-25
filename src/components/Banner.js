import React from "react";
import '../styles/Banner.css'; // Importing the external CSS file

const Banner = () => {
  // Define the background image URL in JS
  const bannerImageUrl = "/images/img7.jpg";

  return (
    <div className="banner-container">
      <div 
        className="banner-image" 
        style={{ backgroundImage: `url(${bannerImageUrl})` }} // Applying background-image via JS
      >
        <div className="banner-content">
          <p className="banner-text"> Cultural expression & Formals</p>
          <h1 className="banner-title">Flash Sale Madness</h1>
          <button className="banner-button">
            Explore Collection →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
