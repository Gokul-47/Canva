import React, { useContext } from "react";
import { ContentContext } from "../App";

export default function TextCont() {
  const { setTexts } = useContext(ContentContext);

  const handleAddText = (key) => {
    const newText = {
      key,
      id: Date.now(),
      content: "Draggable Text",
      x: 10,
      y: 10,
    };
    setTexts((prev) => [...prev, newText]);
  };
  return (
    <>
      <div className="adding">
        <input type="text" placeholder="search texts"></input>
      </div>
      <button
        className="add-txt-btn"
        onClick={() => {
          handleAddText("normal");
        }}
      >
        Add Text Button
      </button>
      Default Text Styles
      <div className="heading">
        <button
          className="heading-btn"
          onClick={() => {
            handleAddText("bold");
          }}
        >
          <h2>Add a Heading</h2>
        </button>
        <button
          className="heading-btn"
          onClick={() => {
            handleAddText("semi");
          }}
        >
          <h3>Add a subHeading</h3>
        </button>
        <button
          className="heading-btn"
          onClick={() => {
            handleAddText("normal");
          }}
        >
          <h4>Add a little bit of body text</h4>
        </button>
      </div>
    </>
  );
}
