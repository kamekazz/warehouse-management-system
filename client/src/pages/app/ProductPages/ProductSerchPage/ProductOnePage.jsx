import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import { acQueryItem } from '../../../../redux/Item/item.action';
import { warningMsgBar } from '../../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';

class ProductOnePage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }

  render() {
    return (
      <PageEl>
        <ContainerHeader
          match={this.props.match}
          title={`SKU:  ${this.props.match.params.id}`}
        />
        <div>
          <ul>{}</ul>
        </div>
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  acQueryItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOnePage);
