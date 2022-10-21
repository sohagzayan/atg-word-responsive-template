import React from "react";
import postData from "../../utility/post";
import DesktopGroupController from "../DesktopGroupController/DesktopGroupController";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import JobPostCard from "../JobPostCard/JobPostCard";
import MeetupCard from "../MeetupCard/MeetupCard";
import MobileGroupController from "../MobileGroupController/MobileGroupController";
import PostCard from "../PostCard/PostCard";
import "./GroupBody.css";
const GroupBody = () => {
  return (
    <div>
      <div className="container">
        <DesktopGroupController />
        <MobileGroupController />

        <div className="row gx-lg-5">
          <div className="col-lg-8">
            {postData?.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
            <MeetupCard />
            <JobPostCard />
          </div>
          <div className="col-lg-4 d-lg-block d-none ">
            <ExtraInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBody;
