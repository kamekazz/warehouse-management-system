import React from 'react';
import PostBoxes from "./PostBoxes";
import {post} from "./data";
import CardLayout from "components/CardLayout";

const ListCard = () => {
  return (
    <CardLayout styleName="col-lg-12">
      <div className="card-header p-4">
        <h2 className="card-title">Pictures from around the world</h2>
        <p className="card-subtitle text-truncate">
          Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero
        </p>
      </div>
      <div className="card-body bg-transparent">
        <ul className="post-list">
          {post.map((post, index) => <PostBoxes key={index} post={post}/>)}
        </ul>
      </div>
    </CardLayout>
  );
};

export default ListCard;