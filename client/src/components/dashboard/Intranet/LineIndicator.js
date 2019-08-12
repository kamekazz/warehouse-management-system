import React from "react";
import PropTypes from "prop-types";

import Aux from "util/Auxiliary";

const LineIndicator = ({width, color}) => {

  return (
    <Aux>
      <div className="jr-line-indi-info">
        <div className={`jr-line-indi rounded bg-${color}`} style={{
          width: Number.parseInt(width) * 4, height: '4px'
        }}/>
      </div>
    </Aux>
  );
};

export default LineIndicator;

LineIndicator.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
