import React from 'react';
import StateBox from "components/StatBox/index"

const StatBoxes = () => (
  <div className="row">
    <div className="col-md-3 col-sm-6 col-12">
      <StateBox name="42 %" types="Growth">
        <span>35<small>%</small></span>
        <i className="zmdi zmdi-airplane zmdi-hc-lg text-green"/>
      </StateBox>
    </div>
    <div className="col-md-3 col-sm-6 col-12">
      <StateBox name="35 %" types="Employee">

        <span>37<small className="size-h5">k</small></span>
        <i className="zmdi zmdi-accounts-alt zmdi-hc-lg text-light-blue text-accent-2"/>
      </StateBox>
    </div>
    <div className="col-md-3 col-sm-6 col-12">
      <StateBox cname="Aasdas" types="Income">
        <span>37<small>k</small></span>
        <i className="zmdi zmdi-money zmdi-hc-lg text-amber"/>
      </StateBox>
    </div>
    <div className="col-md-3 col-sm-6 col-12">
      <StateBox name="Aasdas" types="Items">
        <span>25<small>k</small></span>
        <i className="zmdi zmdi-shopping-cart zmdi-hc-lg text-red text-lighten-2"/>
      </StateBox>
    </div>
  </div>
);
export default StatBoxes;