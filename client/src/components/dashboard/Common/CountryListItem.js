import React from 'react';

const CountryListItem = ({country}) => {
  const {flagCode, name, badge, badgeColor} = country;
  return (
    <div className=" d-flex align-items-center">
      <i className={`flag flag-24 flag-${flagCode}`}/>
      <div className="px-3">{name} </div>
      <div className={`ml-auto px-3 badge badge-pill text-right text-white bg-${badgeColor}`}>{badge} </div>
    </div>

  )
};

export default CountryListItem;
