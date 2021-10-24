import React from "react";

const CustomButton = ({ btnName, btnClass, btnClick }) => {
  return (
    <button className={btnClass} onClick={btnClick}>
      {btnName}
    </button>
  );
};

export default CustomButton;
