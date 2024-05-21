import React from "react";
import "./HomePage.css";
import "../../styles/animations.css";

const HomePage = () => {
  return (
    <div className="fade-in">
      <div className="home">
        <video className="background-video" autoPlay loop muted playsInline>
          <source
            src="src/assets/weather-background/videos/raining.webm"
            type="video/webm"
          />
          <source
            src="src/assets/weather-background/videos/raining.mp4"
            type="video/mp4"
          />
        </video>

        <div className="slide-in main-content">
          <h2>Tesung Kwan O</h2>
          <h1>26 °C</h1>
          <h3>Rainy</h3>
          <h4>H: 26° L: 23°</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
