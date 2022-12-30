import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav class="nav">
        <div class="container">
          <div class="logo">
            <Link href="#">YourLogo</Link>
          </div>
          <div class="main_list" id="mainListDiv">
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Discation</Link>
              </li>
              <li>
                <Link href="#">contect us</Link>
              </li>
              <li>
                <Link href="#">Devloper Contect</Link>
              </li>
              <li>
                <Link href="#">data creadite</Link>
              </li>
            </ul>
          </div>
          <div class="media_button">
            <button class="main_media_button" id="mediaButton">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <section class="home"></section>
    </>
  );
}
