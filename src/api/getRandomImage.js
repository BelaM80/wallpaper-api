export async function getRandomImage() {
  const url = "https://api.unsplash.com/photos/random";
  const response = await fetch(url, {
    method: "GET",
    heeaders: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
  });
}
