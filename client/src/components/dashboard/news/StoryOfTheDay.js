import React from 'react';
import Button from '@material-ui/core/Button';

const StoryOfTheDay = () => {
  return (
    <div className="jr-card">
      <div className="jr-card-body">
        <h6 className="card-subtitle mt-0 mb-2 text-muted">Story Of The Day</h6>
        <h3 className="card-title">How could people together can help bringing peace to the world</h3>
        <h6 className="meta-date">25th Oct 2107</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et
          dolore magna aliqua. </p>
        <p className="card-text">
          Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus
          perspiciatis quod vero!
        </p>
        <Button size="small" color="primary">Learn More</Button>
      </div>
    </div>
  )
};

export default StoryOfTheDay;