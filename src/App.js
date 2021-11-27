import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
