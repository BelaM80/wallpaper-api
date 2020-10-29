import "./favoritImage.css";
import React from "react";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="favoriteCard">
      <img
        className="favoriteCard__img"
        src={`https://source.unsplash.com/${photoId}`}
        alt="Something´s happening"
      />
    </div>
  );
}
