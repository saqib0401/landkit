import React from "react";
import "./clients.styles.css";
import { ReactComponent as AirBnb } from "../../assests/airbnb.svg";
import { ReactComponent as Coinbase } from "../../assests/coinbase.svg";
import { ReactComponent as Dribble } from "../../assests/dribble.svg";
import { ReactComponent as Instagram } from "../../assests/instagram.svg";
import { ReactComponent as Netflix } from "../../assests/netflix.svg";
import { ReactComponent as Pinterest } from "../../assests/pinterest.svg";

const Clients = () => {
  return (
    <div>
      <hr style={{ opacity: 0.3 }} />
      <div className="client-images">
        <AirBnb />
        <Coinbase />
        <Dribble />
        <Instagram />
        <Netflix />
        <Pinterest />
      </div>
    </div>
  );
};

export default Clients;
