import React, { useContext, useState, useCallback } from "react";
import { ContentContext } from "../App";

export default function Content() {
  const { image, setImage, texts, setTexts } = useContext(ContentContext);
  const [dragging, setDragging] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);

      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) {
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
      }
    },
    [setImage]
  );

  const handleTextDrag = useCallback(
    (e, id) => {
      const container = document.querySelector(".content");

      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const relativeY = e.clientY - containerRect.top;

      setTexts((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                x: Math.max(0, Math.min(relativeX, 500 - 100)), 
                y: Math.max(0, relativeY),
              }
            : t
        )
      );
    },
    [setTexts]
  );

  const handleTextClick = (text) => {
    setEditingId(text.id);
    setEditValue(text.content);
  };

  const handleEditSubmit = (id) => {
    setTexts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, content: editValue } : t))
    );
    setEditingId(null);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className="content"
      style={{ position: "relative" }}
    >
      {image && (
        <img
          src={image}
          alt="Dropped"
          className="dropped-image"
          style={{ width: "100%", height: "auto" }}
        />
      )}

      {texts.map((text) => (
        <div
          key={text.id}
          draggable
          onDragEnd={(e) => handleTextDrag(e, text.id)}
          onClick={() => handleTextClick(text)}
          style={{
            position: "absolute",
            left: text.x,
            top: text.y,
            cursor: "move",
            padding: "5px 10px",
            userSelect: "none",
            minWidth: "100px",
          }}
        >
          {editingId === text.id ? (
            <input
              autoFocus
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={() => handleEditSubmit(text.id)}
              onKeyDown={(e) => e.key === "Enter" && handleEditSubmit(text.id)}
              style={{
                width: "100%",
                fontSize: "14px",
                border: "0",
                outline: "0",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            />
          ) : (
            <span className={text.key}>{text.content}</span>
          )}
        </div>
      ))}
    </div>
  );
}
