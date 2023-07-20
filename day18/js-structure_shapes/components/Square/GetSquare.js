import { GetRandomColor } from "../../utils/randomColor.js";

export const GetSquare = document.createElement("div");
GetSquare.classList.add("square");

GetSquare.addEventListener("click", () => {
  GetSquare.style.backgroundColor = GetRandomColor();

  return GetSquare;
});
