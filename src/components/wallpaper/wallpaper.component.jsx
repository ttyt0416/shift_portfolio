import React from "react";
import "./wallpaper.style.scss";

import image from "../../assets/images/5329549.jpg";
import image2 from "../../assets/images/pic01.jpg";

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Wallpaper = () => {
  let location = useLocation();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "wallpaperMobile" : "wallpaper"}>
      <img
        className={isMobile ? "wallpaperMobile__left" : "wallpaper__left"}
        alt=""
        src={image}
      ></img>
      {location.pathname === "/" ? (
        <img
          className={isMobile ? "wallpaperMobile__right" : "wallpaper__right"}
          alt=""
          src={image2}
        ></img>
      ) : (
        <div
          className={isMobile ? "wallpaperMobile__right" : "wallpaper__right"}
        ></div>
      )}
    </div>
  );
};

export default Wallpaper;
