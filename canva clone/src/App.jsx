import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Textbar from "./components/Textbar";
import MainSection from "./components/MainSection";

export const ContentContext = createContext();

export default function App() {
  const [images, setImages] = useState([]);
  const [sideBarCont, setSideBarCont] = useState("text");
  const [image, setImage] = useState(null);
  const [texts, setTexts] = useState([]);

  return (
    <ContentContext.Provider
      value={{
        images,
        setImages,
        setSideBarCont,
        sideBarCont,
        image,
        setImage,
        texts,
        setTexts,
      }}
    >
      <div className="app">
        <Header />
        <div className="app-cont">
          <SideBar />
          <Textbar />
          <MainSection />
        </div>
      </div>
    </ContentContext.Provider>
  );
}
