import React, { useState } from "react";

export default function BGChanger() {
  const [color, setColor] = useState("black");
  const colorChange = (color) => {
    switch (color) {
      case "Yellow":
        setColor("yellow");
        break;
      case "Red":
        setColor("red");
        break;
      case "Black":
        setColor("black");
        break;
      case "Purple":
        setColor("purple");
        break;
      case "Pink":
        setColor("pink");
        break;
      case "Green":
        setColor("green");
        break;
      case "White":
        setColor("white");
        break;
      case "Blue":
        setColor("blue");
        break;
      case "Orange":
        setColor("orange");
        break;

      default:
        break;
    }
  };
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-full h-[120vh] `}
    >
      <div className="text-black items-center self-center  justify-center flex-wrap gap-2 absolute flex px-20  bottom-0 left-0 mx-auto w-full border-1 border-black h-[70px]">
        <button
          onClick={() => colorChange("Yellow")}
          className="shadow-md border px-6 py-2 bg-yellow-200 border-black rounded-sm bg-"
        >
          Yellow
        </button>
        <button
          onClick={() => colorChange("Red")}
          className="shadow-md border px-6 py-2 bg-red-200 border-black rounded-sm bg-"
        >
          Red
        </button>
        <button
          onClick={() => colorChange("Black")}
          className="shadow-md border px-6 py-2 bg-black text-white border-black rounded-sm bg-"
        >
          Black
        </button>
        <button
          onClick={() => colorChange("Purple")}
          className="shadow-md border px-6 py-2 bg-purple-200 border-black rounded-sm bg-"
        >
          Purlpe
        </button>
        <button
          onClick={() => colorChange("Pink")}
          className="shadow-md border px-6 py-2 bg-pink-200 border-black rounded-sm bg-"
        >
          Pink
        </button>
        <button
          onClick={() => colorChange("Green")}
          className="shadow-md border px-6 py-2 bg-green-200 border-black rounded-sm bg-"
        >
          Green
        </button>
        <button
          onClick={() => colorChange("White")}
          className="shadow-md border px-6 py-2 bg-white border-black rounded-sm bg-"
        >
          White
        </button>
        <button
          onClick={() => colorChange("Blue")}
          className="shadow-md border px-6 py-2 bg-blue-200 border-black rounded-sm bg-"
        >
          Blue
        </button>
        <button
          onClick={() => colorChange("Green")}
          className="shadow-md border px-6 py-2 bg-orange-300 border-black rounded-sm bg-"
        >
          Orange
        </button>
      </div>
    </div>
  );
}
