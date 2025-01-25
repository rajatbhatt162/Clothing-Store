import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility when the button is clicked
  };

  return (
    <header>
      <div className="brand-name">Preety Cosmetics</div>
      
      {/* Mobile Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      
      {/* Navigation Links */}
      <nav className={isMenuOpen ? "show" : ""}> {/* Add 'show' class when the menu is open */}
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#products">Products</a>
        <a href="#blog">Blog</a>
        <a href="#pages">Pages</a>
        <a href="#theme">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
