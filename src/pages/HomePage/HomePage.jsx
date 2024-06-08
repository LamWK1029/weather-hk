import React, { useEffect, useContext } from "react";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import "./HomePage.css";
import "../../styles/global.css";
import "../../styles/animations.css";
import { day, month, year, weekDayEn } from "../../utils/date";
import { fetchWeatherFLW } from "../../service/weatherService";
import {
  WeatherContext,
  WeatherDispatchContext,
} from "../../context/weatherContext";

const HomePage = () => {
  const weatherData = useContext(WeatherContext);
  const weatherDispatch = useContext(WeatherDispatchContext);

  useEffect(() => {
    const intervalList = [];

    // animate the page when the video is loaded
    const video = document.querySelector(".background-video");
    video.addEventListener("loadeddata", () => {
      const home = document.querySelector(".home");
      home.classList.add("fade-in");
    });

    // fetch weather data and animate the page
    async function fetchWeather() {
      try {
        const weatherFlw = await fetchWeatherFLW();
        weatherDispatch({ type: "SET_WEATHER_FLW", payload: weatherFlw });
        const announcementMsg = document.querySelector(".announcement .msg");
        announcementMsg.classList.add("scroll-up");
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    }
    fetchWeather();

    return () => {
      intervalList.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
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

      <div className="content">
        <div className="slide-in info">
          <h2>My Location</h2>
          <h4>Tesung Kwan O</h4>
          <h1>26 °C</h1>
          <h3>Rain</h3>
          <h4>H: 26° L: 23°</h4>
        </div>

        <div className="scroll-list slide-in">
          <div className="dashboard">
            <h2>Today</h2>
            <h2>
              {day}-{month}-{year} ({weekDayEn})
            </h2>

            <div className="announcement">
              <div className="msg">
                <div className="general-situation">
                  <h3>General:</h3>
                  <h4>{weatherData.flw.generalSituation}</h4>
                </div>
                <div className="forecast-desc">
                  <h3>Forecast:</h3>
                  <h4>{weatherData.flw.forecastDesc}</h4>
                </div>
                <div className="outlook">
                  <h3>Outlook:</h3>
                  <h4>{weatherData.flw.outlook}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
