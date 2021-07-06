import React from "react";
import "./contactpage.style.scss";

import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={isMobile ? "contactpageMobile" : "contactpage"}>
      <div
        className={isMobile ? "contactpageMobile__left" : "contactpage__left"}
      >
        <div
          className={
            isMobile
              ? "contactpageMobile__left-title"
              : "contactpage__left-title"
          }
        >
          <p>건의 및 문의</p>
        </div>
        <div
          className={
            isMobile
              ? "contactpageMobile__left-email"
              : "contactpage__left-email"
          }
        >
          <p>이메일</p>
          <p>information@untitled.ext</p>
        </div>
        <div
          className={
            isMobile
              ? "contactpageMobile__left-phone"
              : "contactpage__left-phone"
          }
        >
          <p>연락처</p>
          <p>000-0000-0000</p>
        </div>
        <div
          className={
            isMobile
              ? "contactpageMobile__left-address"
              : "contactpage__left-address"
          }
        >
          <p>주소</p>
          <p>1234 Somewhere Road, Nashville, TN 00000</p>
        </div>
        <div
          className={
            isMobile ? "contactpageMobile__left-sns" : "contactpage__left-sns"
          }
        >
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
      <div
        className={isMobile ? "contactpageMobile__right" : "contactpage__right"}
      >
        <div
          className={
            isMobile
              ? "contactpageMobile__right-title"
              : "contactpage__right-title"
          }
        >
          <p>
            Auctor commodo interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
            sagittis.
          </p>
        </div>
        <form
          className={
            isMobile
              ? "contactpageMobile__right-form"
              : "contactpage__right-form"
          }
        >
          <div
            className={
              isMobile
                ? "contactpageMobile__right-wrapper"
                : "contactpage__right-wrapper"
            }
          >
            <input
              className={
                isMobile
                  ? "contactpageMobile__right-name"
                  : "contactpage__right-name"
              }
              type="text"
              placeholder="이름"
            />
            <input
              className={
                isMobile
                  ? "contactpageMobile__right-email"
                  : "contactpage__right-email"
              }
              type="email"
              placeholder="이메일"
            />
          </div>
          <textarea
            className={
              isMobile
                ? "contactpageMobile__right-content"
                : "contactpage__right-content"
            }
            placeholder="건의 및 문의사항"
          />
          <input
            className={
              isMobile
                ? "contactpageMobile__right-submit"
                : "contactpage__right-submit"
            }
            type="submit"
            value="전송"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
