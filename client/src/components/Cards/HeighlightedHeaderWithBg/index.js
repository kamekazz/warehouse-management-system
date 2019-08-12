import React from 'react';
import CardLayout from "components/CardLayout";


const HeighlightedHeaderWithBgCard = () => {
  return (
    <CardLayout childrenStyle="card-highlight">
      <div className="card-header p-4 bg-blue lighten-1">
        <h2 className="card-title text-white">Highlited Header</h2>
        <p className="card-subtitle text-white">
          Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero
        </p>
      </div>

      <div className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        </p>
      </div>
    </CardLayout>
  );
};

export default HeighlightedHeaderWithBgCard;