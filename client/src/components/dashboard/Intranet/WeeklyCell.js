import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const WeeklyCell = ({data}) => {
  const {id, projectName, sales, income, growth} = data;
  const iconName = growth > 0 ? "up" : "down";
  const statusStyle = growth > 0 ? " text-success" : "text-danger";
  return (

    <tr
      tabIndex={-1}
      key={id}>

      <td className="max-width-100">
        <p className="text-truncate mb-0">{projectName}</p>
      </td>

      <td className="text-nowrap">
        {sales} <span className={`d-inline-block ml-1 ${statusStyle}`}>
          {iconName === 'up' ? "+" : "-"}{growth}<i className={`zmdi zmdi-trending-${iconName}`}/></span>
      </td>
      <td className="text-right">
        <p className="text-truncate mb-0">{income}</p>
      </td>
      <td>
        <IconButton className="icon-btn p-1 jr-fs-xxl text-light">
          <i className="zmdi zmdi-more-vert text-grey"/>
        </IconButton>
      </td>

    </tr>

  );
};

export default WeeklyCell;
