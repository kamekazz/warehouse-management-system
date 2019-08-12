import React from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import Button from '@material-ui/core/Button';

const CafeCard = () => {
  return (
    <Card className="shadow border-0">
      <CardImg top width="100%" src='https://via.placeholder.com/365x170' alt="Cafe Basilico"/>
      <CardBody>
        <h2 className="mb-0">Cafe Basilico</h2>
        <div className="d-flex align-items-center my-2">
          <StarRatingComponent
            className="h2 mb-0"
            name=""
            value={4.5}
            starCount={5}

            editing={false}/>
          <span className="d-inline-block text-muted h4 ml-2 mb-0"><small>4.5 (52)</small></span>
        </div>
        <h4 className="font-weight-light">
          Italian Cafe
        </h4>
        <p className="card-text text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </p>
        <hr/>
        <h3 className="mb-0">Tonight's availability</h3>
      </CardBody>

      <div className="card-mt-footer">
        <div>
          <Button size="small" className="jr-btn jr-btn-sm" color="default">
            <i className="zmdi zmdi-time zmdi-hc-lg"/>
            <span>Time</span>
          </Button>

          <Button size="small" className="jr-btn jr-btn-sm" color="default">
            <span>7:30 PM</span>
          </Button>

          <Button size="small" className="jr-btn jr-btn-sm" color="default">
            <span>9:00 PM</span>
          </Button>
        </div>
        <Button size="small" className="jr-btn jr-btn-sm" color="primary">
          <span>RESERVE</span>
        </Button>
      </div>
    </Card>
  );
};

export default CafeCard;