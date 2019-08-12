import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';

const Footer = () => {
    return (
      <footer className="app-footer">
        <span className="d-inline-block">Copyright Company Name &copy; 2018</span>
        <Button
          href="https://codecanyon.net/cart/configure_before_adding/20978545?license=regular&ref=phpbits&size=source&support=bundle_12month&_ga=2.172338659.1340179557.1515677375-467259501.1481606413"
          target="_blank"
          size="small"
          color="primary"
        ><IntlMessages id="eCommerce.buyNow"/></Button>
      </footer>
    );
  }
;

export default Footer;
