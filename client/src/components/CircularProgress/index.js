import React from "react";

const CircularProgress = ({className}) => <div className={`loader ${className}`}>
  <svg className="circular" viewBox="25 25 50 50">
    <circle className="path" cx="50" cy="50" r="15" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
  </svg>
</div>;
export default CircularProgress;
