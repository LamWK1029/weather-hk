import React, { createContext, useReducer } from "react";

const WeatherContext = createContext(null);
const WeatherDispatchContext = createContext(null);

const initWeather = {
  flw: {
    generalSituation: "",
    forecastDesc: "",
    outlook: "",
  },
  fnd: {
    generalSituation: "",
    weatherForecast: [],
  },
};

function weatherReducer(tasks, action) {
  switch (action.type) {
    case "SET_WEATHER_FLW":
      return {
        ...tasks,
        flw: action.payload,
      };
    case "SET_WEATHER_FND":
      return {
        ...tasks,
        fnd: action.payload,
      };
    default:
      return tasks;
  }
}

const WeatherProvider = ({ children }) => {
  const [weatherInfo, dispatch] = useReducer(weatherReducer, initWeather);

  return (
    <WeatherContext.Provider value={weatherInfo}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext, WeatherDispatchContext };
