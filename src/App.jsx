// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import ForecastPage from "./pages/Forecast";
import { WeatherProvider } from "./context/weatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forecast" element={<ForecastPage />} />
          </Routes>
        </Layout>
      </Router>
    </WeatherProvider>
  );
};

export default App;
