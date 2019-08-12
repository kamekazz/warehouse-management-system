import React from "react";
import WidgetHeader from "components/WidgetHeader/index";

const Photos = ({photoList, title}) => {

  return (
    <div className="jr-entry-sec">
      <WidgetHeader title={title}/>

      <ul className="jr-gallery-list">
        {photoList.map((photo, index) =>
          <li key={index}>
            <img alt="..." src={photo.image}/>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Photos
