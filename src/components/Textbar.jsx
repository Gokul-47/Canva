import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function Textbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      <div className="textbar" style={isOpen ? {} : { width: "0px" }}>
        <div className="adding">
          <input type="text" placeholder="search texts"></input>
        </div>
        <button className="add-txt-btn">Add Text Button</button>
        Default Text Styles
        <div className="heading">
          <button className="heading-btn">
            <h2>Add a Heading</h2>
          </button>
          <button className="heading-btn">
            <h3>Add a subHeading</h3>
          </button>
          <button className="heading-btn">
            <h4>Add a little bit of body text</h4>
          </button>
        </div>
      </div>
      <div className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaAngleLeft style={isOpen ? {} : { transform: "rotate(180deg)" }} />
      </div>
    </div>
  );
}
