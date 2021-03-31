import React from "react";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ul>
          {ingredients.map((e) => (
            <li key={Math.random() * 1000}>{e.text}</li>
          ))}
        </ul>
      </div>
      <p>Total Calories: {Math.round(calories * 100) / 100}cal</p>
      <img src={image} alt="" />
    </div>
  );
}
