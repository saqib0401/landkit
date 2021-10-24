import React from "react";
import "./buyNow.styles.css";
import Ratings from "../ratings/ratings.component";

import CustomButton from "../customButton/customButton.component";
import { useHistory } from "react-router";
const BuyNow = () => {
  const history = useHistory();
  return (
    <div className="buynow">
      <CustomButton
        btnName={"Back To Home Page"}
        btnClick={() => history.push("/")}
        btnClass={"buynowBtn"}
      />
      <h1 className="buynow-heading">Thanks for Buying the Landkit</h1>
      <Ratings />
    </div>
  );
};

export default BuyNow;
