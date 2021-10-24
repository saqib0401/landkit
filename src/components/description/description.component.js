import React from "react";
import { ReactComponent as OnOff } from "../../assests/onoff.svg";
import { ReactComponent as Designed } from "../../assests/design.svg";
import { ReactComponent as Document } from "../../assests/document.svg";

import "./description.styles.css";

const Description = () => {
  return (
    <div className="description">
      <div>
        <OnOff />
        <h3 className="desc-heading">Built for developers</h3>
        <p className="desc-details">
          Landkit is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </p>
      </div>
      <div>
        <Designed />
        <h3 className="desc-heading">Designed to be modern</h3>
        <p className="desc-details">
          Designed with the latest design trends in mind. Landkit feels modern,
          minimal, and beautiful.
        </p>
      </div>
      <div>
        <Document />
        <h3 className="desc-heading">Documentation for everything</h3>
        <p className="desc-details">
          We've written extensive documentation for components and tools, so you
          never have to reverse engineer anything.
        </p>
      </div>
    </div>
  );
};

export default Description;
