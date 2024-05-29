import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.footer_logo} alt="logo" />
          <p>Aliquip pariatur cillum quis reprehenderit amet ut velit laboris et culpa elit. Ipsum aliqua pariatur minim culpa irure. Est consectetur veniam nisi elit commodo est cillum Lorem.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+63 930 855 0016</li>
            <li>cyrelneil.dev@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 © Eatstime.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
