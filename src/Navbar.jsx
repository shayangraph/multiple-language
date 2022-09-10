/* eslint-disable jsx-a11y/anchor-is-valid */
<<<<<<< HEAD
import React from "react";
import {useLanguage} from './context';
=======
import React,{useContext} from "react";
import useLanguage from './context'
>>>>>>> 4509b234c4853fd3359ee8582e476de1d1370b51


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Navbar() {
<<<<<<< HEAD
  const { changeLanguage, words } = useLanguage("hello","farsi");
=======
  const {languageContext} = useLanguage("")
  const {changeLanguage} = useContext(languageContext)
  setLangClick("test is the")
>>>>>>> 4509b234c4853fd3359ee8582e476de1d1370b51
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Events
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact Us
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
          Language
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a className="dropdown-item" href="#" onClick={()=>changeLanguage("farsi")}>
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a className="dropdown-item" href="#"  onClick={()=>changeLanguage("usehook")}>
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
