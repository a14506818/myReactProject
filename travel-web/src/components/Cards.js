import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import App from "../App";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              imgSrc="../images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            ></CardItem>
            <CardItem
              imgSrc="../images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              imgSrc="../images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            ></CardItem>
            <CardItem
              imgSrc="../images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountain"
              label="Adventure"
              path="/products"
            ></CardItem>
            <CardItem
              imgSrc="../images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
