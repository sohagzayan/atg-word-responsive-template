import React from "react";
import { BsPencil } from "react-icons/bs";
import "./ToolsMobileView.css";
const ToolsMobileView = () => {
  return (
    <div className="d-lg-none d-block">
      <div className="AddYourPost ">
        <h5>
          <BsPencil />
        </h5>
      </div>
    </div>
  );
};

export default ToolsMobileView;
