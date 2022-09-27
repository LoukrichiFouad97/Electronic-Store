import React from "react";

import "./style.scss";

function CategoryCard() {
  return (
    <div className="category-card">
      <div className="card-content">
        <h6>Maecenas non erat</h6>
        <h3>Pro scooter</h3>
        <p>weekend discount</p>
        <span>
          <bdi>$299.00</bdi>
          <del>
            <bdi>$399.00</bdi>
          </del>
        </span>
      </div>
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt="image placeholder" />
      </div>
    </div>
  );
}

export default CategoryCard;
