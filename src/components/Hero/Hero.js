import React from "react";
import Aro from "../../assets/arrow_back_24px.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero position-relative our_container ">
      <div>
        <div className="join_group">
          <img src={Aro} alt="" />
          <button className="btn_join_group">Join Group</button>
        </div>
        <div className="hero_content">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
