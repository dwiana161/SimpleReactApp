import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from "./components/Login/Login";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(cart.indexOf(item));
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>} />
      <Route element={<Navbar setShow={setShow} size={cart.length} />}>
        <Route path='/bookstore' element={<Amazon handleClick={handleClick} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        </Route>
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
