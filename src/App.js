import "./App.css";
import ImagePreview from "./components/ImagePreview";

function App() {
  return (
    <main>
      <button>Get Random Image</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
        }
        alt={"Newspaper reading"}
        author={"Flip"}
      />
    </main>
  );
}

export default App;
