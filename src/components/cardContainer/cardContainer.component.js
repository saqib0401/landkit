import React from "react";
import CustomButton from "../customButton/customButton.component";
import { BsCheckCircleFill } from "react-icons/bs";

import "./cardContainer.styles.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-img"
          src="https://landkit.goodthemes.co/assets/img/photos/photo-2.jpg"
          alt="Avatar"
        />
        <div className="container">
          <form>
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <br />
            <CustomButton
              btnName={"Download a sample"}
              btnClass={"sampleBtn"}
            />
          </form>
        </div>
      </div>
      <div className="card-container-content">
        <h2>
          The most useful resource
          <br />
          <span> ever created for designers.</span>
        </h2>
        <p>
          Using Landkit to build your site means never worrying about designing
          another page or cross browser compatibility. Our ever-growing library
          of components and pre-designed layouts will make your life easier.
        </p>

        <ul className="card-content-list">
          <div>
            <li className="card-content-list-item">
              <span className="check">
                <BsCheckCircleFill />{" "}
              </span>
              Lifetime updates
            </li>
            <li className="card-content-list-item">
              <span className="check">
                <BsCheckCircleFill />{" "}
              </span>
              Tons of assets
            </li>
          </div>
          <div>
            <li className="card-content-list-item">
              <span className="check">
                <BsCheckCircleFill />{" "}
              </span>
              Tech support
            </li>
            <li className="card-content-list-item">
              <span className="check">
                <BsCheckCircleFill />{" "}
              </span>
              Integration ready
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CardContainer;
