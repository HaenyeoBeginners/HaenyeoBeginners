import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Story from "./pages/Story/Story";
import Map from "./pages/Map/Map";
import StoryDetail from "./pages/StoryDetail/StoryDetail";
import Layout from "./layout/Layout";
import { ModalID } from "./components/Modal/Modal";

function App() {
  const [modalType, setModalType] = useState<ModalID>(null);

  const onClick = (btn: ModalID) => {
    setModalType(btn);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout modalType={modalType} onClick={onClick} />}
      >
        <Route index path="/" element={<Main />} />
        <Route path="/story/:id" element={<Story />} />
        <Route
          path="/story/:id/detail"
          element={<StoryDetail onClick={onClick} />}
        />
        <Route path="/map" element={<Map onClick={onClick} />} />
      </Route>
    </Routes>
  );
}

export default App;
