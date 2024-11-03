import React from "react";

function Progressbar({ filled }) {
  return (
    <div className="progressbar" style={{ height: "30px", width: "100%", backgroundColor: "#e0e0df", position: "relative" }}>
      <div
        style={{
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "blue",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
      <span style={{ position: "absolute", right: "10px", color: "#fff" }}>
        {Math.round(filled)}%
      </span>
    </div>
  );
}
export default Progressbar;
