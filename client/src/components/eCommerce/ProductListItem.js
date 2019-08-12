import React from 'react';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
import IntlMessages from 'util/IntlMessages';

const ProductListItem = ({product}) => {
  const {thumb, name, price, mrp, offer, variant, rating, description} = product;
  return (
    <div className="card product-item-vertical hoverable animation flipInX">
      <div className="row d-flex align-items-sm-center">
        <div className="col-xl-3 col-lg-4 col-md-3 col-12">
          <div className="card-header border-0 p-0">
            <div className="card-image">
              <div className="grid-thumb-equal">
                <span className="grid-thumb-cover jr-link">
                  <img className="img-fluid" src={thumb} alt="..."/>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-5 col-md-6 col-12">
          <div className="card-body">
            <div className="product-details">
              <h3 className="card-title fw-regular">{name}
                <small className="text-grey text-darken-2">{', ' + variant}</small>
              </h3>
              <div className="d-flex ">
                <h3 className="card-title">{price} </h3>
                <h5 className="text-muted px-2">
                  <del>{mrp}</del>
                </h5>
                <h5 className="text-success">{offer} off</h5>
              </div>

              <div className="d-flex flex-row " style={{height: 25}}>
                <StarRatingComponent
                  name=""
                  value={rating}
                  starCount={5}
                  editing={false}/>
                <p className="ml-2">{rating}</p>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
          <div className="card-footer border-0 text-center bg-white">
            <div className="cart-btn mb-2">
              <Button variant="contained" className="bg-primary text-white"><IntlMessages
                id="eCommerce.addToCart"/></Button>
            </div>

            <Button color="primary"><IntlMessages id="eCommerce.readMore"/></Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductListItem;

