import React from "react";
import "./welcome.styles.css";
import CustomButton from "../customButton/customButton.component";
import { useHistory } from "react-router";
import { AiOutlineArrowRight } from "react-icons/ai";

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h2>
          Welcome to <span>Landkit</span>.<br /> Develop anything.
        </h2>
        <p>
          Build a beautiful, modern website with flexible
          <br /> Bootstrap components built from scratch.
        </p>
        <button
          className="welcome-viewBtn"
          onClick={() => history.push("/view")}
        >
          View all Pages{"      "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </button>
        <CustomButton btnName={"Documentation"} btnClass={"welcome-docBtn"} />
      </div>
      <div className="img-container">
        <img
          className="welcome-img"
          alt="people meeting"
          src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
        />
      </div>
    </div>
  );
};

export default Welcome;
