import React from 'react';
import CardTabs from "./CardTabs";
import CardLayout from "components/CardLayout";


const TabbedCard = () => {
  return (
    <CardLayout styleName="col-lg-6">
      <div className="card-header p-4 bg-blue lighten-1">
        <h2 className="card-title text-white">Highlited Header</h2>
        <p className="card-subtitle text-white text-truncate">
          Fusce eget dolor id justo luctus commodo vel pharetra nisi. Donec velit libero
        </p>
      </div>

      <CardTabs/>
    </CardLayout>
  );
};

export default TabbedCard;