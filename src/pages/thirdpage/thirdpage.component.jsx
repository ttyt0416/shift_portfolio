import React from "react";
import "./thirdpage.style.scss";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/thumbs/07.jpg";
import img2 from "../../assets/images/thumbs/08.jpg";
import img3 from "../../assets/images/thumbs/09.jpg";

const ThirdPage = () => {
  let [count, setCount] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "thirdpageMobile" : "thirdpage"}>
      <p className={isMobile ? "thirdpageMobile__text" : "thirdpage__text"}>
        Integer mollis egestas nam maximus erat id euismod egestas. Pellentesque
        sapien ac quam. Lorem ipsum dolor sit nullam.
      </p>
      <div
        className={
          isMobile ? "thirdpageMobile__container" : "thirdpage__container"
        }
      >
        <FontAwesomeIcon
          className={isMobile ? "thirdpageMobile__arrow" : "thirdpage__arrow"}
          icon={faChevronLeft}
          onClick={() => setCount(count - 1)}
        />
        <div className={isMobile ? "thirdpageMobile__img" : "thirdpage__img"}>
          <img
            alt=""
            src={count % 3 === 0 ? img1 : count % 3 === 1 ? img2 : img3}
          />
        </div>
        <FontAwesomeIcon
          className={isMobile ? "thirdpageMobile__arrow" : "thirdpage__arrow"}
          icon={faChevronRight}
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};

export default ThirdPage;
