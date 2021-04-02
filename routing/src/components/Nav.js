import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
