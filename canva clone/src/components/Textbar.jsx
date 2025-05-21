import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { ContentContext } from "../App";
import TextCont from "./TextCont";
import ImageCont from "./ImageCont";

export default function Textbar() {
  const [isOpen, setIsOpen] = useState(true);
  const { sideBarCont } = useContext(ContentContext);

  return (
    <div style={{ position: "relative" }}>
      <div className="textbar" style={isOpen ? {} : { width: "0px" }}>
        {sideBarCont === "text" ? <TextCont /> : <ImageCont />}
      </div>
      <div className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaAngleLeft style={isOpen ? {} : { transform: "rotate(180deg)" }} />
      </div>
    </div>
  );
}
