import React from "react";
import "../styles/Categories.css";

const categories = [
  { name: "Jackets", items: 12, imgSrc: "/images/img1.jpg" },
  { name: "Long Coat", items: 12, imgSrc: "images/img2.jpg" },
  { name: "Female Top", items: 12, imgSrc: "images/img3.jpg" },
  { name: "Combo Offer", items: 12, imgSrc: "images/img4.jpg" },
  { name: "Tract Suits", items: 12, imgSrc: "images/img5.jpg" },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Categories you might like</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.imgSrc} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.items} items</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Collection</button>
    </div>
  );
};

export default Categories;
