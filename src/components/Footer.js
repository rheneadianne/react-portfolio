import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
      <footer>
        <ul>
          <a href="https://github.com/rheneadianne" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/rhenea/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="hhttps://twitter.com/rheneadianne" target="blank">
            <li>
              <FaTwitter />
            </li>
          </a>
        </ul>
      </footer>
  );
};

export default Footer;