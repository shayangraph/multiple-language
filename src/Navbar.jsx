/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Navbar() {
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
            <a className="dropdown-item" href="#">
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a className="dropdown-item" href="#">
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
