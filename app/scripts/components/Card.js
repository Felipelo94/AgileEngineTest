import React from "react";

function Card({ img, description, title, price, tags }) {
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={img} className="card__image" />
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <p className="card__price">{`Price: ${price}`}</p>
        </div>
        <button className="card__btn">Add Bag</button>
      </div>
    </div>
  );
}

export default Card;
