import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <img className="ImageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
