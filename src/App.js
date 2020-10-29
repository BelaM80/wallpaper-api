import "./App.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./api/getRandomImage";

import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavorits() {
    const imgId = randomImage.id;
    let favorites = null;
    try {
      favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    } catch (error) {
      console.log(error);
      favorites = [];
    }
    if (favorites.includes(imgId)) {
      return;
    }

    const newFavorits = [...favorites, imgId];
    localStorage.setItem("favorites", JSON.stringify(newFavorits));
  }

  const photoIds = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          onClickFavorits={() => handleClickFavorits()}
        />
      )}
      <FavoriteImageList photoIds={photoIds} />
    </main>
  );
}

export default App;
