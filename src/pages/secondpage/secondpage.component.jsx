import React from "react";
import "./secondpage.style.scss";

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
  return (
    <div className="secondpage">
      <p className="secondpage__text">
        Etiam tristique libero eu nibh porttitor amet fermentum. Nullam
        venenatis erat id vehicula ultrices sed ultricies condimentum.
      </p>
      <ul className="secondpage__contents">
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faLaptop} /> Consequat tempus
        </li>
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faBolt} /> Etiam adipiscing
        </li>
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faSignal} /> Libero nullam
        </li>
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faCog} /> Blandit condimentum
        </li>
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Lorem ipsum dolor
        </li>
        <li className="secondpage__contents-icon">
          <FontAwesomeIcon icon={faCode} /> Nibh amet venenatis
        </li>
      </ul>
      <p className="secondpage__text">
        Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat,
        et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero,
        feugiat magna tempus, sed et lorem adipiscing.
      </p>
    </div>
  );
};

export default SecondPage;
