import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const mobileMenuClosers = () => {
    setIsClicked(false);
  };

  const mobileBtnHandler = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    mobileBtnHandler();
  }, []);

  window.addEventListener("resize", mobileBtnHandler);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={mobileMenuClosers}>
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={mobileMenuClosers}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={mobileMenuClosers}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={mobileMenuClosers}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={mobileMenuClosers}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button btnStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}
