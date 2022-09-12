/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLanguage } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Navbar() {
  const { changeLanguage, language } = useLanguage();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="#">
          {language === "english" ? "Home" : "خانه"}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {language === "english" ? "Events" : "رویداد ها"}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {language === "english" ? "About Us" : "درباره ما"}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {language === "english" ? "Contact Us" : "تماس با ما"}
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          {language === "english" ? "Language" : "زبان"}
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a
              className="dropdown-item"
              href="#"
              onClick={() => changeLanguage("farsi")}
            >
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a
              className="dropdown-item"
              href="#"
              onClick={() => changeLanguage("usehook")}
            >
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
