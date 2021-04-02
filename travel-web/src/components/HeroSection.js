import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button className="btns" btnStyle="btn--outline" btnSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" btnStyle="btn--primary" btnSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
