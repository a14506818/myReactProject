import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export default function Button({ children, type, onClick, btnStyle, btnSize }) {
  const btnStyleChecker = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const btnSizeChecker = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${btnStyleChecker} ${btnSizeChecker}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
