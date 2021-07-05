import React from "react";
import "./contactpage.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <div className="contactpage__left">
        <div className="contactpage__left-title">
          <p>건의 및 문의</p>
        </div>
        <div className="contactpage__left-email">
          <p>이메일</p>
          <p>information@untitled.ext</p>
        </div>
        <div className="contactpage__left-phone">
          <p>연락처</p>
          <p>000-0000-0000</p>
        </div>
        <div className="contactpage__left-address">
          <p>주소</p>
          <p>1234 Somewhere Road, Nashville, TN 00000</p>
        </div>
        <div className="contactpage__left-sns">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
      <div className="contactpage__right">
        <div className="contactpage__right-title">
          <p>
            Auctor commodo interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
            sagittis.
          </p>
        </div>
        <form className="contactpage__right-form">
          <div className="contactpage__right-wrapper">
            <input
              className="contactpage__right-name"
              type="text"
              placeholder="이름"
            />
            <input
              className="contactpage__right-email"
              type="email"
              placeholder="이메일"
            />
          </div>
          <textarea
            className="contactpage__right-content"
            placeholder="건의 및 문의사항"
          />
          <input
            className="contactpage__right-submit"
            type="submit"
            value="전송"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
