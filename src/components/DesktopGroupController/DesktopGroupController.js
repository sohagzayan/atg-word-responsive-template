import React from "react";
import "./DesktopGroupController.css";
import { AiOutlineCaretDown, AiOutlineUsergroupAdd } from "react-icons/ai";
const GroupController = () => {
  return (
    <div className="d-lg-block d-none GroupControllers">
      <div className="container px-0 d-flex justify-content-between">
        <ul className="d-flex  categoryList">
          <li className="activeCategory">All Posts(32)</li>
          <li className="px-2">Article</li>
          <li className="px-2">Event</li>
          <li className="px-2">Education</li>
          <li className="px-2">Job</li>
        </ul>
        <div>
          <button className="btn_action_write_post">
            Write a Post <AiOutlineCaretDown />
          </button>
          <button className="btn_action_join_group">
            <AiOutlineUsergroupAdd /> Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupController;
