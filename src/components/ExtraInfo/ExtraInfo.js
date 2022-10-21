import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <div>
        <form action="" className="search_location position-relative">
          <HiOutlineLocationMarker className="iconsLocation" />
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="Enter your location"
            className=""
          />
          {location.length ? (
            <AiOutlineClose
              onClick={() => setLocation("")}
              className="iconsClose"
            />
          ) : (
            <BsPencil className="iconsClose" />
          )}
        </form>
        <p className="mt-4 d-flex gap-2">
          <span>
            <AiOutlineInfoCircle className="fs-4 mr-4 d-inline-block" />
          </span>
          <span>
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
