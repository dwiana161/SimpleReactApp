import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useNavigate, Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleShop = () =>{
    navigate('http://localhost:3000/bookstore')
  }

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {
        cart.length === 0 ?
        <>
        <div className="cart-empty">
            <p className="title-cart">Keranjang masih kosong</p>
            <Link to="/bookstore"><button className="button-shop">Belanja</button></Link>
           
          </div>
        </>
        :
        <>
        {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.url} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
        </>
      }
    </article>
  );
};

export default Cart;
