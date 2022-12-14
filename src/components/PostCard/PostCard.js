import React, { useState } from "react";
import "./PostCard.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import PostController from "../PostController/PostController";

const PostCard = ({ post }) => {
  const { title, image, description, view, category, user } = post;
  const [showPostController, setShowPostController] = useState(false);

  return (
    <div>
      <div className="card mb-5">
        <img className="img-fluid" src={image} alt="" />
        <div className="p-3">
          <h6 className="mb-3 d-inline-block">{category}</h6>
          <div className="d-flex justify-content-between">
            <h4 className="mb-3">{title}</h4>
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
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={user?.userImage} alt="" />
              <h6 className="fw-bold">{user?.name}</h6>
            </div>
            <div className="d-flex align-items-center gap-4">
              <h6 className="">
                <AiOutlineEye className="fs-5 mx-2 " />
                {view}k views
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

export default PostCard;
