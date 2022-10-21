import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiShoppingBag } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import userImage from "../../assets/user3.png";
import { BsFillShareFill } from "react-icons/bs";
import "./JobPostCard.css";
import PostController from "../PostController/PostController";
const JobPostCard = () => {
  const [showPostController, setShowPostController] = useState(false);
  return (
    <div>
      <div className="card mb-5">
        <div className="p-3">
          <h6 className="mb-3 d-inline-block">💼️ Job</h6>
          <div className="d-flex justify-content-between">
            <h4 className="mb-3">Software Developer</h4>
            <h4 className="position-relative">
              <span
                onClick={() => setShowPostController((prev) => !prev)}
                className={
                  showPostController ? "postcontroler active" : "postcontroler"
                }
              >
                <BiDotsHorizontalRounded />
              </span>
              {showPostController && <PostController />}
            </h4>
          </div>
          <div className="d-flex  align-items-center mb-3">
            <h6 className="d-flex align-items-center gap-2 me-5">
              <BiShoppingBag />
              Innovaccer Analytics Private Ltd.
            </h6>
            <h6 className="d-flex align-items-center gap-2">
              <HiOutlineLocationMarker />
              Noida, India
            </h6>
          </div>
          <button className="ApplyonTimesjobs">Visit Website</button>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={userImage} alt="" />
              <h6 className="fw-bold">Ronal Jones</h6>
            </div>
            <div className="d-flex align-items-center gap-4">
              <h6 className="">
                <AiOutlineEye className="fs-5 mx-2" />
                1.4k views
              </h6>
              <h6 className="shairIcons">
                <BsFillShareFill className="fs-5 " />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
