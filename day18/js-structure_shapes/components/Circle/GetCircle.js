import { GetRandomColor } from "../../utils/randomColor.js";

export const GetCircle = document.createElement("div");
GetCircle.classList.add("circle");
GetCircle.addEventListener("click", () => {
  GetCircle.style.backgroundColor = GetRandomColor();

  return GetCircle;
});
