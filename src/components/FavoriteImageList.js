import React from "react";
import FavoriteImage from "./FavoritImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div className="card">
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId.toString()} photoId={photoId} />
      ))}
    </div>
  );
}
