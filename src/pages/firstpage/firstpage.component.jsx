import React from "react";
import "./firstpage.style.scss";

import { useMediaQuery } from "react-responsive";

import img from "../../assets/images/thumbs/01.jpg";

const FirstPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "firstpageMobile" : "firstpage"}>
      {/* <div className="firstpage__intro">
        <h1 className="firstpage__intro-headline">First Page</h1>
      </div> */}
      <div
        className={isMobile ? "firstpageMobile__content" : "firstpage__content"}
      >
        <p
          className={
            isMobile
              ? "firstpageMobile__content-text"
              : "firstpage__content-text"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus
          rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices
          sed ultricies condimentum. Magna sed etiam consequat, et lorem
          adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat
          magna tempus, sed et lorem adipiscing.
        </p>
        <div
          className={
            isMobile ? "firstpageMobile__content-img" : "firstpage__content-img"
          }
        >
          <img alt="" src={img} />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
