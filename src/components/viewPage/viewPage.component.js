import React from "react";
import CustomButton from "../customButton/customButton.component";
import BootstrapThemes from "../bootstrapThemes/bootstrapThemes.component";
import { useHistory } from "react-router";

import "./viewPage.styles.css";
const ViewPage = () => {
  const history = useHistory();

  return (
    <div className="view">
      <CustomButton
        btnName={"Back To Home Page"}
        btnClick={() => history.push("/")}
        btnClass={"viewBtn"}
      />
      <BootstrapThemes />
    </div>
  );
};

export default ViewPage;
