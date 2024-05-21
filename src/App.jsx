// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AreasPage from "./pages/AreasPage";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
