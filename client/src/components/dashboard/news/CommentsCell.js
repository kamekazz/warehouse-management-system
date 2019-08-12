import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'


const CommentsCell = ({data}) => {
  const {name, desc, image} = data;
  return (
    <div className="media media-list">
      <img title="" alt="" className="rounded-circle avatar size-60 mr-3" src={image}/>
      <div className="media-body">
        <h5 className="mt-0">{name}</h5>
        <p className="card-text">{desc}</p>
        <div className="comment-footer">
          <Button size="small" variant="contained" color="primary" className="mr-4">APPROVE</Button>
          <Button size="small" variant="contained" color="secondary">DENY</Button>
        </div>
      </div>
      <IconButton className="icon-btn p-1 ml-2">
        <i className="zmdi zmdi-close"/>
      </IconButton>
    </div>
  );
};

export default CommentsCell;
