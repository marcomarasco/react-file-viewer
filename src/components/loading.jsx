// Copyright (c) 2017 PlanGrid, Inc.

import React from "react";

import "styles/loading.scss";

const Loading = ({ loadingComponent }) => {
  if (typeof loadingComponent !== "undefined" && loadingComponent) {
    return loadingComponent;
  } else {
    return (
      <div className="loading-container">
        <span className="loading" />
      </div>
    );
  }
};

export default Loading;
