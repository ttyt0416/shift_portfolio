import React from "react";
import "./header.style.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        홈
      </Link>
      <Link className="header__link" to="/first">
        first
      </Link>
      <Link className="header__link" to="/second">
        second
      </Link>
      <Link className="header__link" to="/third">
        third
      </Link>
      <Link className="header__link" to="/forth">
        forth
      </Link>
      <Link className="header__link" to="/fifth">
        fifth
      </Link>
      <Link className="header__link" to="/sixth">
        sixth
      </Link>
      <Link className="header__link" to="/contact">
        건의
      </Link>
    </div>
  );
};

export default Header;
