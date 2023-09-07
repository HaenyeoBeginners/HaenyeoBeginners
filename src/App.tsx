import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Story from "./pages/Story";
import Map from "./pages/Map";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index path="/" element={<Main />} />
        <Route path="/story" element={<Story />} />
        <Route path="/map" element={<Map />} />
      </Route>
    </Routes>
  );
}

export default App;
