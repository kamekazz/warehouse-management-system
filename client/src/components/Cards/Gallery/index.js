import React from 'react';
import gallery from "./galleryData";


function GalleryCard() {
  return (
    <div className="jambo-card" style={{width: 400}}>
      <div className="card-primary-title">
        <div className="card-title">Highlited Header</div>
        <div>Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero
        </div>
      </div>

      <div className="row px-3">
        {gallery.map((image, index) => (
          <img className="col-sm-4 col-6 p-1" key={index} alt={image.title} src={image.img}
               style={{maxHeight: 80}}/>
        ))}
      </div>


    </div>
  );
}

export default GalleryCard;