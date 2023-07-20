import { GetRandomColor } from "./utils/randomColor.js";

import { GetCircle } from "./components/Circle/GetCircle.js";

import { GetSquare } from "./components/Square/GetSquare.js";

import { GetPentagon } from "./components/Pentagon/GetPentagon.js";

console.clear();

const getRandomColor = GetRandomColor();

GetRandomColor();

const root = document.getElementById("root");

root.append(GetCircle, GetSquare, GetPentagon);
