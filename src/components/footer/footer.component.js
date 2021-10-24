import React from "react";
import { IconContext } from "react-icons";

import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-brand">
        <h3>Landkit.</h3>
        <p>A better way to build.</p>
        <div className="footer-logos">
          <IconContext.Provider value={{ size: 25 }}>
            <AiOutlineInstagram />
            <AiFillFacebook />
            <AiOutlineTwitter />
            <BsPinterest />
          </IconContext.Provider>
        </div>
      </div>
      <div className="footer-list">
        <h4>PRODUCTS</h4>
        <ul>
          <li>
            <a href="#!">Page Builder</a>
          </li>
          <li>
            <a href="#!">UI Kit</a>
          </li>
          <li>
            <a href="#!">Styleguide</a>
          </li>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Changelog</a>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <h4>SERVICES</h4>
        <ul>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Changelog</a>
          </li>
          <li>
            <a href="#!">Pagebuilder</a>
          </li>
          <li>
            <a href="#!">UI Kit</a>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <h4>CONNECT</h4>
        <ul>
          <li>
            <a href="#!">Page Builder</a>
          </li>
          <li>
            <a href="#!">UI Kit</a>
          </li>
          <li>
            <a href="#!">Styleguide</a>
          </li>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Changelog</a>
          </li>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Changelog</a>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <h4>LEGAL</h4>
        <ul>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Changelog</a>
          </li>
          <li>
            <a href="#!">Pagebuilder</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
