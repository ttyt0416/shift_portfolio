import React from "react";
import "./homepage.style.scss";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "homepageMobile" : "homepage"}>
      <div className={isMobile ? "homepageMobile__intro" : "homepage__intro"}>
        <h1
          className={
            isMobile
              ? "homepageMobile__intro-headline"
              : "homepage__intro-headline"
          }
        >
          {" "}
          Shift{" "}
        </h1>
        <p
          className={
            isMobile ? "homepageMobile__intro-text" : "homepage__intro-text"
          }
        >
          이 사이트는 HTML5 UP의 <br></br>AJLKN의 디자인을 참고하였습니다
        </p>
      </div>
      <div className={isMobile ? "homepageMobile__links" : "homepage__links"}>
        <Link
          className={isMobile ? "homepageMobile__link" : "homepage__link"}
          to="/"
        >
          홈
        </Link>
        <Link
          className={isMobile ? "homepageMobile__link" : "homepage__link"}
          to="/first"
        >
          first
        </Link>
        <Link
          className={isMobile ? "homepageMobile__link" : "homepage__link"}
          to="/second"
        >
          second
        </Link>
        <Link
          className={isMobile ? "homepageMobile__link" : "homepage__link"}
          to="/third"
        >
          third
        </Link>
        <Link
          className={isMobile ? "homepageMobile__link" : "homepage__link"}
          to="/contact"
        >
          건의
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
