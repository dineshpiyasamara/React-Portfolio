import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Deep Blade
      </a>

      <ull className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ull>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://facebook.com">
          <FaTwitter />
        </a>
        <a href="https://facebook.com">
          <FaInstagram />
        </a>
        <a href="https://facebook.com">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Deep Blade. All right recerved.</small>
      </div>
    </footer>
  );
}

export default Footer;
