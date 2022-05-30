import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import Brain from "./Brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="br2 shadow-2 logo"
        style={{ transformStyle: "preserve-3d", height: 150, width: 150 }}
      >
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={Brain} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
