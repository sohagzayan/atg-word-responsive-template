import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import image from "../../assets/metup card.png";
import userImage from "../../assets/user3.png";
import { BsFillShareFill } from "react-icons/bs";
import "./MeetupCard.css";
import PostController from "../PostController/PostController";

const MeetupCard = () => {
  const [showPostController, setShowPostController] = useState(false);

  return (
    <div>
      <div className="card mb-5">
        <img className="img-fluid" src={image} alt="" />
        <div className="p-3">
          <h6 className="mb-3 d-inline-block">🗓️ Meetup</h6>
          <div className="d-flex justify-content-between">
            <h4 className="mb-3">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h4>
            <h4 className="position-relative">
              <span
                onClick={() => setShowPostController((prev) => !prev)}
                className={
                  showPostController ? "postcontroler active" : "postcontroler"
                }
              >
                <HiOutlineDotsHorizontal />
              </span>
              {showPostController && <PostController />}
            </h4>
          </div>
          <div className="d-flex  align-items-center mb-3">
            <h6 className="d-flex align-items-center gap-2 me-5">
              <BiCalendarEvent />
              Fri, 12 Oct, 2018
            </h6>
            <h6 className="d-flex align-items-center gap-2">
              <HiOutlineLocationMarker />
              Ahmedabad, India
            </h6>
          </div>
          <button className="visitWebSiteButton">Visit Website</button>
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

export default MeetupCard;
