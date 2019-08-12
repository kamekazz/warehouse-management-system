import React from "react";

function NewsItem({data}) {
  const {image, description} = data;
  return (
    <div className="mb-4">
      <div className="mr-3" style={{height: 150, width: 200}}>
        <img className="img-fluid" src={image} alt="..."/>
      </div>
      <p className="mt-0 text-sm">{description}</p>
    </div>
  );
}

export default NewsItem;
