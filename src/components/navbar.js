import React from "react";
import "../styles/navbar.css";
import { useNavigate, Outlet } from "react-router-dom";

const Navbar = ({ setShow, size }) => {

  const navigate = useNavigate();

  const handleItemShow = () =>{
    setShow(true);
    navigate('bookstore')
  }

  const handleItemCart = () =>{
    setShow(false);
    navigate('cart')
  }

  const handleLogout = () =>{
    navigate('/')
  }

  return (
  <>
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={handleItemShow}>
          Bookstore
        </span>
        <div className="cart" onClick={handleItemCart}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <span className="logout" onClick={handleLogout}>
          Logout
        </span>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
