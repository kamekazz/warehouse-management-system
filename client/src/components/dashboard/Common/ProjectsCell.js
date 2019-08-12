import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Badge} from 'reactstrap';

const ProjectsCell = ({data}) => {
  const {id, name, date, status, color} = data;
  return (

    <tr
      tabIndex={-1}
      key={'projects-' + id}>

      <td className="max-width-100">
        <p className="text-truncate mb-0">{name}</p>
      </td>

      <td className="text-nowrap">{date}</td>
      <td>
        <Badge className="d-block" color={color}>{status}</Badge>
      </td>
      <td className="text-right">
        <IconButton className="icon-btn text-light p-1"><i className="zmdi zmdi-more-vert text-grey"/></IconButton>
      </td>
    </tr>

  );
};

export default ProjectsCell;
