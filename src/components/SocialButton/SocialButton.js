import React from "react";
import "./SocialButton.css";
const SocialButton = ({ icons, text }) => {
  return (
    <button className="social_btn">
      {icons}
      {text}
    </button>
  );
};

export default SocialButton;
