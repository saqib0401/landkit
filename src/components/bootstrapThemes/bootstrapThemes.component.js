import React from "react";

import "./bootstrapThemes.styles.css";

const BootstrapThemes = () => {
  return (
    <div className="bootstrapThemes">
      <div className="bootstrapThemes-1">
        <h3 className="bootstrap-heading">
          We have lots of experience <br />
          <span className="h3-span">building Bootstrap themes</span>.
        </h3>
        <p>
          We've built well over a dozen Bootstrap themes and sold tens of
          thousands of copies.
        </p>
        <h3 className="bootstrap-heading-2">
          Bootstrap users since the beginning
        </h3>
        <p>
          We've been developing with Bootstrap since it was publicly released in
          2011.
        </p>
        <h3 className="bootstrap-heading-2">Deep understanding of Bootstrap</h3>
        <p>
          We've watched Bootstrap grow up over the years and understand it
          better than almost anyone.
        </p>
      </div>
      <div>
        <img
          alt="performance graph"
          className="performance-img"
          src="https://landkit.goodthemes.co/assets/img/screenshots/desktop/dashkit.jpg"
        />
      </div>
    </div>
  );
};

export default BootstrapThemes;
