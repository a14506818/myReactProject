import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const item = await data.json();
    console.log(item);
    setItems(item);
  };

  return (
    <div>
      <h1>Shop</h1>
      {items.map((e) => (
        <h5 key={e.id}>
          <Link to={`/shop/${e.id}`} style={{ color: "black" }}>
            {e.title}
          </Link>
        </h5>
      ))}
    </div>
  );
}
