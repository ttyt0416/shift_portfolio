import React from "react";
import "./title.style.scss";

import { useLocation } from "react-router-dom";

const Title = () => {
  let location = useLocation();
  let pathname =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="title">
      <h1>{pathname} Page</h1>
    </div>
  );
};

export default Title;
