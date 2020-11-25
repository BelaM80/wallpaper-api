import React from "react";
import FavoriteImage from "./FavoritImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ favorites }) {
  return (
    <div className="card">
      {favorites.map((favoritImageProp) => (
        <FavoriteImage
          key={favoritImageProp.toString()}
          favorites={favoritImageProp}
        />
      ))}
    </div>
  );
}
