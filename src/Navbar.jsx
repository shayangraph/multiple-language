/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { useLanguage } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Navbar() {
  const { changeLanguage, words } = useLanguage();

  const handleLanguageChange = (value) => {
    changeLanguage(value);
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" id={"_home"}>
        <a className="nav-link" href="#">
          {words.home}
        </a>
      </li>
      <li className="nav-item" id={"_events"}>
        <a className="nav-link" href="#">
          {words.events}
        </a>
      </li>
      <li className="nav-item" id={"_about"}>
        <a className="nav-link" href="#">
          {words.aboutUs}
        </a>
      </li>
      <li className="nav-item" id={"_contact"}>
        <a className="nav-link" href="#">
          {words.contactUs}
        </a>
      </li>

      <li className="nav-item dropdown" id="simple-menu">
        <a
          className="nav-link dropdown-toggle"
          id={"_lan"}
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          {words.language}
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a
              className="dropdown-item"
              onClick={() => handleLanguageChange("Persian")}
              href="#"
              id={"_changeToPersian"}
            >
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a
              className="dropdown-item"
              onClick={() => handleLanguageChange("English")}
              href="#"
              id={"_changeToEnglish"}
            >
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
