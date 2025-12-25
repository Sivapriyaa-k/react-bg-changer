import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  /* function changebg(color) {
    setColor(color);
  } */
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center text-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="bg-red-500 text-white px-7 py-3 rounded-2xl cursor-pointer"
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
