import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  return (
    <div>
      <div>
        <form action="" className="search_location position-relative">
          <HiOutlineLocationMarker className="iconsLocation" />
          <input type="text" placeholder="Enter your location" className="" />
          <AiOutlineClose className="iconsClose" />
        </form>
        <p className="mt-4">
          <AiOutlineInfoCircle className="fs-4 mr-4 d-inline-block" />
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
