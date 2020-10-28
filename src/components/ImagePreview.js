import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <button
        className="btn__favorits"
        onClick={() => {
          alert("Hello");
        }}
      >
        ❤️
      </button>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
