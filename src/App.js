import "./App.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./api/getRandomImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavorits() {
    const oldFavorits = JSON.parse(localStorage.getItem("favorites")) || [];

    //sconst isFavorite = oldFavorits.incudes(randomImage.id)

    // if (isFavorite) {
    //   oldFavorits = oldFavorits.filter((
    //      => != randomImage.id
    //   ))
    // }

    const newFavorits = [...oldFavorits, randomImage.id];
    localStorage.setItem("favorites", JSON.stringify(newFavorits));
  }

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
    </main>
  );
}

export default App;
