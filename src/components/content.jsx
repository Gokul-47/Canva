import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

export default function Content() {

  const { image, setImage } = useContext(ImageContext);

  const [dragging, setDragging] = useState(false);

  console.log(image);
  

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];

    if(file && file.type.startsWith("image/")) {
      const imageURL=URL.createObjectURL(file);
      setImage(imageURL);
    }else{
      alert("Please drop an image file.");
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className="content"
      style={dragging ? { backgroundColor: "rgba(231, 241, 136, 0.6)" } : {}}
    >
      {image && (<img src={image} alt="Dropped" className="dropped-image" />)}
    </div>
  );
}
