import React from 'react';

const ServicePanel = () => {
  return (
    <div className="jr-card">
      <div className="row">

        <div className="col-6">
          <div className="card-body">
            <div className="color-theme">
              <div className="color-theme-header">
                <h3 className="color-theme-title">Service Panel </h3>
                <span className="jr-link"
                      className="btn close"><span>&times;</span></span>
              </div>
              <div className="color-theme-body">
                <h3>With Light sidebar</h3>
                <ul className="color-option">
                  <li><span
                    className="jr-link bg-cyan active">7</span></li>
                  <li><span
                    className="jr-link bg-teal">8</span></li>
                  <li><span
                    className="jr-link bg-deep-orange">9</span></li>

                  <li><span
                    className="jr-link bg-pink">10</span></li>
                  <li><span
                    className="jr-link bg-blue">11</span></li>
                  <li><span
                    className="jr-link bg-indigo">12</span></li>
                  <li><span
                    className="jr-link bg-deep-purple">11</span></li>
                  <li><span
                    className="jr-link bg-green">12</span></li>
                </ul>
                <h3>With Dark sidebar</h3>
                <ul className="color-option cr-op-dark-sidebar">
                  <li><span
                    className="jr-link bg-cyan active">7</span></li>
                  <li><span
                    className="jr-link bg-teal">8</span></li>
                  <li><span
                    className="jr-link bg-deep-orange">9</span></li>

                  <li><span
                    className="jr-link bg-pink">10</span></li>
                  <li><span
                    className="jr-link bg-blue">11</span></li>
                  <li><span
                    className="jr-link bg-indigo">12</span></li>
                  <li><span
                    className="jr-link bg-deep-purple">11</span></li>
                  <li><span
                    className="jr-link bg-green">12</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default ServicePanel;

