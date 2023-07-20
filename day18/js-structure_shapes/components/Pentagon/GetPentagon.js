import { GetRandomColor } from "../../utils/randomColor.js";

export const GetPentagon = document.createElement("div");
GetPentagon.classList.add("pentagon");
GetPentagon.addEventListener("click", () => {
  GetPentagon.style.backgroundColor = GetRandomColor();

  return GetPentagon;
});
