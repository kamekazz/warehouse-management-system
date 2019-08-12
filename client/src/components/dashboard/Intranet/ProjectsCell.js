import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import LineIndicator from "components/dashboard/Intranet/LineIndicator";

const ProjectsCell = ({data}) => {
  const {id, name, date, color, teamList, progressValue} = data;
  return (

    <tr
      tabIndex={-1}
      key={id}>

      <td className="max-width-100">
        <p className="text-truncate mb-0">{name}</p>
      </td>

      <td className="text-nowrap">{date}</td>
      <td>
        <LineIndicator width={progressValue / 4 + "%"} color={color} value={progressValue}/>
      </td>
      <td>
        <ul className="team-list">
          {teamList.map((team, index) =>
            <li key={team.id}>
              <Avatar className="user-avatar" src={team.image}/>
            </li>
          )}
        </ul>
      </td>
      <td>
        <IconButton className="text-light icon-btn p-1">
          <i className="zmdi zmdi-more-vert text-grey"/>
        </IconButton>
      </td>
    </tr>

  );
};

export default ProjectsCell;
