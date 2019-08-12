import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import CardMenu from '../Common/CardMenu'

class OrderTableCell extends React.Component {

  onOptionMenuSelect = event => {
    this.setState({menuState: true, anchorEl: event.currentTarget});
  };
  handleRequestClose = () => {
    this.setState({menuState: false});
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    }
  }

  render() {
    const {anchorEl, menuState} = this.state;
    const {id, orderId, name, image, orderDate, deliveryDate, status} = this.props.data;
    const statusStyle = status.includes("Completed") ? "text-white bg-success" : status.includes("On Hold") ? "bg-amber" : status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
    return (
      <tr
        tabIndex={-1}
        key={id}
      >
        <td>{orderId}</td>
        <td>
          <div className="user-profile d-flex flex-row align-items-center">
            <Avatar
              alt={name}
              src={image}
              className="user-avatar"
            />
            <div className="user-detail">
              <h5 className="user-name">{name} </h5>
            </div>
          </div>
        </td>
        <td>{orderDate}</td>
        <td>{deliveryDate}</td>
        <td className="status-cell text-right">
          <div className={` badge text-uppercase ${statusStyle}`}>{status}</div>
        </td>
        <td className="text-right">
          <IconButton onClick={this.onOptionMenuSelect.bind(this)}>
            <i className="zmdi zmdi-more-vert"/></IconButton>
          <CardMenu menuState={menuState} anchorEl={anchorEl}
                    handleRequestClose={this.handleRequestClose.bind(this)}/>
        </td>
      </tr>

    );
  }
}

export default OrderTableCell;
