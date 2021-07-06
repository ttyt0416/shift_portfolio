import React from "react";
import "./header.style.scss";

import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "headerMobile" : "header"}>
      <Link className={isMobile ? "headerMobile__link" : "header__link"} to="/">
        홈
      </Link>
      <Link
        className={isMobile ? "headerMobile__link" : "header__link"}
        to="/first"
      >
        first
      </Link>
      <Link
        className={isMobile ? "headerMobile__link" : "header__link"}
        to="/second"
      >
        second
      </Link>
      <Link
        className={isMobile ? "headerMobile__link" : "header__link"}
        to="/third"
      >
        third
      </Link>
      <Link
        className={isMobile ? "headerMobile__link" : "header__link"}
        to="/contact"
      >
        건의
      </Link>
    </div>
  );
};

export default Header;
