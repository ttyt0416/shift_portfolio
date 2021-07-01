import React from "react";
import "./thirdpage.style.scss";

import { useState } from "react";

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

  return (
    <div className="thirdpage">
      <p classname="thirdpage__text">
        Integer mollis egestas nam maximus erat id euismod egestas. Pellentesque
        sapien ac quam. Lorem ipsum dolor sit nullam.
      </p>
      <div className="thirdpage__container">
        <FontAwesomeIcon
          className="thirdpage__arrow"
          icon={faChevronLeft}
          onClick={() => setCount(count - 1)}
        />
        <div className="thirdpage__img">
          <img
            alt=""
            src={count % 3 === 0 ? img1 : count % 3 === 1 ? img2 : img3}
          />
        </div>
        <FontAwesomeIcon
          className="thirdpage__arrow"
          icon={faChevronRight}
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};

export default ThirdPage;
