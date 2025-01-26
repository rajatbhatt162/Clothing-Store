import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const infoLinks = ["About Us", "Our Stories", "Size Guide", "Contact Us", "Career", "My Account"];
  const serviceLinks = [
    "Shipping",
    "Return & Refund",
    "Privacy Policy",
    "Terms & Conditions",
    "Orders FAQs",
    "My Wishlist",
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Address Section */}
        <div className="footer-section address">
          <h2 className="brand-name">Preety Cosmetics</h2>
          <p>Ranipokhri, Rishikesh Road</p>
          <a href="#direction" className="footer-link">Get Direction ➡️</a>
          <p><a href="mailto:SurajThapliyal@gmail.com" className="footer-link">SurajThapliyal@gmail.com</a></p>
          <p><a href="tel:+13156666688" className="footer-link">315-666-6688</a></p>
        </div>

        {/* Information Links */}
        <div className="footer-section links">
          <h3>Information</h3>
          <ul>
            {infoLinks.map((item, index) => (
              <li key={index}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Customer Services Links */}
        <div className="footer-section links">
          <h3>Customer Services</h3>
          <ul>
            {serviceLinks.map((item, index) => (
              <li key={index}><a href="#" className="footer-link">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <small>
            By clicking subscribe, you agree to the{" "}
            <a href="#" className="footer-link">Terms of Service</a> and{" "}
            <a href="#" className="footer-link">Privacy Policy</a>.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
