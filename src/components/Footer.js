import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul class="nav justify-content-center display-2">
        <li class="nav-item m-5">
          <a href="https://github.com/rheneadianne" target="blank">
            <FaGithub />
          </a>
        </li>

        <li class="nav-item m-5"><a href="https://www.linkedin.com/in/rhenea/" target="blank">
          <FaLinkedin /></a>
        </li>

        <li class="nav-item m-5"><a href="https://twitter.com/rheneadianne" target="blank">
          <FaTwitter /></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;