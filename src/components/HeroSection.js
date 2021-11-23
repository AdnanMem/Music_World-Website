import React from "react";
import "./HeroSection.css";
import video from "../images and videos/hero-video.mp4";

const HeroSection = ({ showBurger }) => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted></video>
      <div className={showBurger ? "btn-invisible" : "btn-container"}>
        <button className="btn-neon">Lorem</button>
        <button className="btn-neon">Lorem</button>
      </div>
      <h1 className="hero-center">Welcome to Music World</h1>
    </div>
  );
};

export default HeroSection;
