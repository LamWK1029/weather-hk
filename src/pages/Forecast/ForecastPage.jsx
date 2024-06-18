import React, { useEffect, useContext } from "react";
import "./ForecastPage.css";
import "../../styles/animations.css";
import { fetchWeatherFND } from "../../service/weatherService";
import {
  WeatherContext,
  WeatherDispatchContext,
} from "../../context/weatherContext";

const ForecastPage = () => {
  const weatherData = useContext(WeatherContext);
  const weatherDispatch = useContext(WeatherDispatchContext);

  useEffect(() => {
    const intervalList = [];

    // fetch weather 9-day forecast
    async function fetchWeatherFor9Days() {
      try {
        const weatherFnd = await fetchWeatherFND();
        debugger;
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
    <div className="forecast slide-in">
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

      <div className="forecast-content">
        <h1>9-Days Forecast</h1>
      </div>
    </div>
  );
};

export default ForecastPage;
