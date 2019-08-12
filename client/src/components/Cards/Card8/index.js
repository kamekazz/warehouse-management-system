import React from 'react';


const GalleryCard = () => {
  return (
    <div className="jambo-card" style={{width: 245, height: 340}}>

      <div className="card-media card-img-top">
        <img src='https://via.placeholder.com/500x330' style={{width: 245, height: 270}}/>
      </div>
      <div className="d-flex flex-row align-items-center  justify-content-around card-actions"
           style={{height: 70}}>
        <i className="btn zmdi zmdi-favorite p-2"/>
        <i className="btn zmdi zmdi-bookmark p-2"/>
        <i className="btn zmdi zmdi-share p-2"/>
      </div>
    </div>
  );
};

export default GalleryCard;