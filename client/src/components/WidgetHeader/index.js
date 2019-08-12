import React from "react";
import PropTypes from "prop-types";

const WidgetHeader = ({title, extra, styleName}) => {

  return (
    <h2 className={`jr-entry-title ${styleName}`}>
      {title}
      <span className="text-primary jr-fs-md pointer ml-auto jr-d-none jr-d-sm-block">{extra}</span>
    </h2>
  )
};

WidgetHeader.defaultProps = {
  styleName: '',
};

WidgetHeader.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
};

export default WidgetHeader;
