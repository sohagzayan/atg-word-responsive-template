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

        <div className="row gx-5">
          <div className="col-md-8">
            {postData?.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
            <MeetupCard />
            <JobPostCard />
          </div>
          <div className="col-md-4">
            <ExtraInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBody;
