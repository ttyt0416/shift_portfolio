import React from "react";
import "./title.style.scss";

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Title = () => {
  let location = useLocation();
  let pathname =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "titleMobile" : "title"}>
      <h1>{pathname} Page</h1>
    </div>
  );
};

export default Title;
