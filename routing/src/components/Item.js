import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Item({ match }) {
  const [item, setItem] = useState([]);

  console.log(match);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {};

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}
