import React, { useEffect, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PauseIcon from "@mui/icons-material/Pause";
import "./HomePage.css";
import "../../styles/global.css";
import "../../styles/animations.css";
import { day, month, year, weekDayEn } from "../../utils/date";
import { fetchWeatherFLW, fetchWeatherFND } from "../../service/weatherService";
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
        // craete flash announcement by adding class show to the announcement child div
        const announcement = document.querySelector(".announcement");
        announcement.children[0].classList.add("fade-in-3s");

        // set interval to show the next announcement
        let index = 0;
        const announcementChildren = announcement.children;
        const announcementInterval = setInterval(() => {
          announcementChildren[index].classList.remove("fade-in-3s");
          index = (index + 1) % announcementChildren.length;
          announcementChildren[index].classList.add("fade-in-3s");
        }, 3000);
        intervalList.push(announcementInterval);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    }
    fetchWeather();

    // detect scroll-list scroll event and show the scroll-icon
    const scrollList = document.querySelector(".announcement");
    scrollList.addEventListener("scroll", () => {
      // stop intervalList to show the next announcement
      intervalList.forEach((interval) => clearInterval(interval));

      const playIcon = document.querySelector(".play-icon");
      playIcon.classList.add("fade-in-out");

      const scrollIcon = document.querySelector(".scroll-icon");
      scrollIcon.classList.remove("slide-in-out");
      scrollIcon.classList.add("fade-out");
    });

    // fetch weather 9-day forecast
    async function fetchWeatherFor9Days() {
      try {
        const weatherFnd = await fetchWeatherFND();
        weatherDispatch({ type: "SET_WEATHER_FND", payload: weatherFnd });
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    }
    fetchWeatherFor9Days();

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
              <div className="play-icon">
                <PauseIcon />
              </div>
              <div className="scroll-icon slide-in-out">
                <KeyboardArrowDownIcon />
              </div>
            </div>

            {/* {weatherData.fnd.weatherForecast.map((forecast) => (
              <div key={forecast.forecastDate} className="weather-forecast">
                <h3>{forecast.week}</h3>
                <h4>{forecast.forecastWeather}</h4>
                <h4>
                  H: {forecast.forecastMaxtemp.value}° L:{" "}
                  {forecast.forecastMintemp.value}°
                </h4>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
