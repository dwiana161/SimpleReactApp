import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="footer_shop">
        &copy;{new Date().getFullYear()} BookColor
        </div>
    </footer>
  );
};

export default Footer;
