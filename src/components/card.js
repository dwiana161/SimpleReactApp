import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, url } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={url} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        {/* <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p> */}
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
