import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpcenterPage from "./pages/HelpcenterPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex h-full w-full flex-col justify-center items-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<HelpcenterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
