import React from "react";
import "./wallpaper.style.scss";

import image from "../../assets/images/5329549.jpg";
import image2 from "../../assets/images/pic01.jpg";

const Wallpaper = ({ homepage = null }) => {
  return (
    <div className="wallpaper">
      <img className="wallpaper__left" alt="" src={image}></img>
      {homepage ? (
        <img className="wallpaper__right" alt="" src={image2}></img>
      ) : (
        <div className="wallpaper__right"></div>
      )}
    </div>
  );
};

export default Wallpaper;
