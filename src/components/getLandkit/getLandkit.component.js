import React from "react";
import CustomButton from "../customButton/customButton.component";
import { useHistory } from "react-router";
import "./getLandkit.styles.css";

const GetLandkit = () => {
  const history = useHistory();
  return (
    <div className="getlandkit">
      <h5>GET STARTED</h5>
      <h3 className="getlandkit-heading">Get Landkit and save your time.</h3>
      <p className="getlandkit-para">
        Stop wasting time trying to do it the "right way" and build a site from
        scratch.
        <br />
        Landkit is faster, easier, and you still have complete control.
      </p>
      <CustomButton
        btnName={"Buy it now"}
        btnClass={"getlandkitBtn"}
        btnClick={() => history.push("/buy")}
      />
    </div>
  );
};

export default GetLandkit;
