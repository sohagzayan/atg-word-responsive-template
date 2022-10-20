import React from "react";

const MobileGroupController = () => {
  return (
    <div className="mobileView d-lg-none d-block">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h6>Posts(368)</h6>

        <div>
          <span>Filter: All</span>
          <select name="" id="">
            <option value="all">All</option>
            <option value="article">Article</option>
            <option value="job">Job</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MobileGroupController;
