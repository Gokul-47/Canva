import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Textbar from "./components/Textbar";
import MainSection from "./components/MainSection";

export const ImageContext = createContext();

export default function App() {

  const [image, setImage] = useState(null);
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <div className="app">
        <Header />
        <div className="app-cont">
          <SideBar />
          <Textbar />
          <MainSection />
        </div>
      </div>
    </ImageContext.Provider>
  );
}
