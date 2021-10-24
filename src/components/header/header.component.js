import React from "react";
import "./header.styles.css";
import CustomButton from "../customButton/customButton.component";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h1 className="heading">Landkit.</h1>
      <ul className="list">
        <li className="item">
          <a href="/">Landings</a>
        </li>
        <li className="item">
          <a href="/">Pages</a>
        </li>
        <li className="item">
          <a href="/">Account</a>
        </li>
        <li className="item">
          <a href="/">Documentation</a>
        </li>
      </ul>
      <CustomButton
        btnName={"Buy now"}
        btnClass={"header-btn"}
        btnClick={() => history.push("/buy")}
      />
    </div>
  );
};

export default Header;
