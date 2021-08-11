import React, { useEffect, useState } from "react";
import "../../css/theme change/ThemeChange.css";
import { setTheme } from "./ThemeChange";

const ToggleFunction = () => {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <label className="switch">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
            checked
          />
          <span class="slider round"></span>
        </label>
      ) : (
        <label className="switch">
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={handleOnClick}
          />
          <span class="slider round"></span>
        </label>
      )}
      {/* <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label> */}
    </div>
  );
};

export default ToggleFunction;
