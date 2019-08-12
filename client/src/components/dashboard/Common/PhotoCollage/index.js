import React from 'react';
import gallery from "./galleryData";
import IconButton from '@material-ui/core/IconButton';

const PhotoCollage = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex">
        <h3 className="card-heading mr-auto">Pictures from around the world</h3>
        <IconButton className="icon-btn"><i className="zmdi zmdi-more-vert"/></IconButton>
      </div>

      <ul className="list-inline thumbnail-list">
        {gallery.map((image, index) => (
          <li key={index} className="thumbnail-item">
            <div className="grid-thumb-equal">
              <span className="grid-thumb-cover jr-link">
                <img alt={image.title} src={image.img}/>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoCollage;