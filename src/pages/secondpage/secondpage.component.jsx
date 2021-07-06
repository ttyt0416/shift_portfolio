import React from "react";
import "./secondpage.style.scss";

import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBolt,
  faSignal,
  faCog,
  faMapMarkerAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const SecondPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "secondpageMobile" : "secondpage"}>
      <p className={isMobile ? "secondpageMobile__text" : "secondpage__text"}>
        Etiam tristique libero eu nibh porttitor amet fermentum. Nullam
        venenatis erat id vehicula ultrices sed ultricies condimentum.
      </p>
      <ul
        className={
          isMobile ? "secondpageMobile__contents" : "secondpage__contents"
        }
      >
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faLaptop} /> Consequat tempus
        </li>
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faBolt} /> Etiam adipiscing
        </li>
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faSignal} /> Libero nullam
        </li>
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faCog} /> Blandit condimentum
        </li>
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Lorem ipsum dolor
        </li>
        <li
          className={
            isMobile
              ? "secondpageMobile__contents-icon"
              : "secondpage__contents-icon"
          }
        >
          <FontAwesomeIcon icon={faCode} /> Nibh amet venenatis
        </li>
      </ul>
      <p className={isMobile ? "secondpageMobile__text" : "secondpage__text"}>
        Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat,
        et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero,
        feugiat magna tempus, sed et lorem adipiscing.
      </p>
    </div>
  );
};

export default SecondPage;
