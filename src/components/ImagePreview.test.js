import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./App";

it("renders withiut crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview />, div);
});
