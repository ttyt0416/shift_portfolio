import React from "react";
import "./wallpaper.style.scss";

import image from "../../assets/images/5329549.jpg";
import image2 from "../../assets/images/pic01.jpg";

import { useLocation } from "react-router-dom";

const Wallpaper = () => {
  let location = useLocation();

  return (
    <div className="wallpaper">
      <img className="wallpaper__left" alt="" src={image}></img>
      {location.pathname === "/" ? (
        <img className="wallpaper__right" alt="" src={image2}></img>
      ) : (
        <div className="wallpaper__right"></div>
      )}
    </div>
  );
};

export default Wallpaper;
