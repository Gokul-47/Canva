import React, { useContext, useRef } from "react";
import { ContentContext } from "../App";

export default function ImageCont() {
  const { images, setImages, setImage } = useContext(ContentContext);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <input
        type="file"
        accept="image/*"
        hidden
        multiple
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <button className="upload-img" onClick={handleUploadClick}>
        Upload Images
      </button>

      <div className="img-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`uploaded ${index}`}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={() => setImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
