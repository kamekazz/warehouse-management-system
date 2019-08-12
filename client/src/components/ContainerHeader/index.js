import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const getDisplayString = (sub) => {
  const arr = sub.split("-");
  if (arr.length > 1) {
    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + " " + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
  } else {
    return sub.charAt(0).toUpperCase() + sub.slice(1)
  }

};
const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return '#/';
  } else {
    return '#/' + path.split(sub)[0] + sub;
  }
};

const ContainerHeader = ({title, match}) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  return (
    <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
      <h2 className="title mb-3 mb-sm-0">{title}</h2>

      <Breadcrumb className="mb-0" tag="nav">
        {subPath.map((sub, index) => {
            return <BreadcrumbItem active={subPath.length === index + 1}
                                   tag={subPath.length === index + 1 ? "span" : "a"} key={index}
                                   href={getUrlString(path, sub, index)}>{getDisplayString(sub)}</BreadcrumbItem>
          }
        )}
      </Breadcrumb>
    </div>
  )
};

export default ContainerHeader;

