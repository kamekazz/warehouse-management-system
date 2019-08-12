import React from "react";
import Avatar from '@material-ui/core/Avatar';

const ProfileHeader = () => {
  return (
    <div className="jr-profile-banner">
      <div className="jr-profile-container">
        <div className="jr-profile-banner-top">
          <div className="jr-profile-banner-top-left">
            <div className="jr-profile-banner-avatar">
              <Avatar className="size-90" alt="..." src='https://via.placeholder.com/124x106'/>
            </div>
            <div className="jr-profile-banner-avatar-info">
              <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-light">Kiley Brown</h2>
              <p className="mb-0 jr-fs-lg">Florida, USA</p>
            </div>
          </div>
          <div className="jr-profile-banner-top-right">
            <ul className="jr-follower-list">
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">2k+</span>
                <span className="jr-fs-sm">Followers</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">847</span>
                <span className="jr-fs-sm">Following</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">327</span>
                <span className="jr-fs-sm">Friends</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="jr-profile-banner-bottom">
          <div className="jr-tab-list">
            <ul className="jr-navbar-nav">
              <li>
                <span className="jr-link">Timeline</span>
              </li>
              <li>
                <span className="jr-link">About</span>
              </li>
              <li>
                <span className="jr-link">Photos</span>
              </li>
              <li>
                <span className="jr-link">Friends <span className="jr-fs-xs">287</span></span>
              </li>
              <li>
                <span className="jr-link">More</span>
              </li>
            </ul>
          </div>
          <span className="jr-link jr-profile-setting">
            <i className="zmdi zmdi-settings mr-2"/>
            <span className="d-inline-flex align-middle ml-1 jr-ml-sm-0">Setting</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;

