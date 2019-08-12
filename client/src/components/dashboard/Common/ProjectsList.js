import React from 'react';
import ProjectsCell from './ProjectsCell';


const ProjectsList = ({data}) => {
  return (
    <div className="table-responsive-material">
      <table className="project-list-table table remove-table-border mb-0">
        <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Date</th>
          <th colSpan="2" scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        {data.map(data => {
          return (
            <ProjectsCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    </div>
  );

};

export default ProjectsList;