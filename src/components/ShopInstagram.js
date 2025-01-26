import React from "react";
import "../styles/ShopInstagram.css";

const ShopInstagram = () => (
  <div className="container">
    <div className="main-content">
      <h2 className="title">Shop on Instagram</h2>
      <p className="subtitle">Elevate your wardrobe with fresh finds today!</p>
    </div>

    <div className="images-section">
      {Array(6).fill(0).map((_, index) => (
        <img
          key={index}
          src={`/images/img/img${index + 1}.jpg`}
          alt={`Product ${index + 1}`}
          className="product-image"
        />
      ))}
    </div>

    <div className="features-section">
      {[
        { icon: "↩️", title: "14-Day Returns", desc: "Risk-free shopping with easy returns." },
        { icon: "🚚", title: "Free Shipping", desc: "No extra costs, just the price you see." },
        { icon: "🎧", title: "24/7 Support", desc: "24/7 support, always here just for you." },
        { icon: "⭐", title: "Member Discounts", desc: "Special prices for our loyal customers." },
      ].map((feature, index) => (
        <div className="feature" key={index}>
          <div className="icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.desc}</p>
        </div>
      ))}
    </div>

    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ⬆️
    </button>
  </div>
);

export default ShopInstagram;
