import { useState } from "react";
import "./bg-change.css";
const BgChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duraction-200 text-center flex justify-center"
      style={{ background: color }}
    >
      <div className="fixed flex align-center flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="btn-listing flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "indigo", color: "white" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "violet", color: "white" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
