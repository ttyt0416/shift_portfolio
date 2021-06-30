import React from "react";
import "./homepage.style.scss";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__intro">
        <h1 className="homepage__intro-headline"> Shift </h1>
        <p className="homepage__intro-text">
          이 사이트는 HTML5 UP의 <br></br>AJLKN의 디자인을 참고하였습니다
        </p>
      </div>
      <div className="homepage__links">
        <Link className="homepage__link" to="/">
          홈
        </Link>
        <Link className="homepage__link" to="/first">
          first
        </Link>
        <Link className="homepage__link" to="/second">
          second
        </Link>
        <Link className="homepage__link" to="/third">
          third
        </Link>
        <Link className="homepage__link" to="/forth">
          forth
        </Link>
        <Link className="homepage__link" to="/fifth">
          fifth
        </Link>
        <Link className="homepage__link" to="/sixth">
          sixth
        </Link>
        <Link className="homepage__link" to="/contact">
          건의
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
