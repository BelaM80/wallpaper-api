import "./favoritImage.css";
import React from "react";

type favoritImageProp = {
  favorites: "string";
};

export default function FavoriteImage({ favorites }: favoritImageProp) {
  return (
    <div className="favoriteCard">
      <img
        className="favoriteCard__img"
        src={`https://source.unsplash.com/${favorites}`}
        alt="Something´s happening"
      />
    </div>
  );
}
