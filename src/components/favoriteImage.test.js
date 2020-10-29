import React from "react";
import ReactDOM from "react-dom";
import FavoritImage from "./FavoritImage";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavoritImage photoId="UjD08DRW24E" />, div);
});
it("renders img from unsplash", () => {
  render(<FavoritImage photoId="UjD08DRW24E" />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://source.unsplash.com/UjD08DRW24E")
  ).toBeTruthy();
});
