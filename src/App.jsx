// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AreasPage from "./pages/AreasPage";
import { WeatherProvider } from "./context/weatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/areas" element={<AreasPage />} />
          </Routes>
        </Layout>
      </Router>
    </WeatherProvider>
  );
};

export default App;
