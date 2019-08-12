import React from "react";
import PropTypes from "prop-types";
import {Card, CardTitle} from "reactstrap";

const Widget = ({children, styleName, title}) => {

  return (
    <Card className={`jr-card jr-card-widget ${styleName}`}>
      {title ? <CardTitle>{title}</CardTitle> : null}
      {children}
    </Card>
  )
};

export default Widget;
Widget.defaultProps = {
  styleName: '',
};

Widget.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired
};
