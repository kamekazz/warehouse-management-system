import React from 'react';
import CircularProgress from "components/CircularProgress/index";
import Snackbar from '@material-ui/core/Snackbar';
import Auxiliary from "util/Auxiliary";
import {connect} from "react-redux";
import {hideMessage} from "actions/Common";

class InfoView extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error || nextProps.message) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 3000);
    }
  }

  render() {
    const {error, loading, message} = this.props;
    const open = error !== '' || message !== '';
    let showMessage = message;
    if (error) {
      showMessage = error;
    }

    console.log("showMessage, open", showMessage, open);

    return (
      <Auxiliary>
        {loading && <div className="loader-view">
          <CircularProgress/>
        </div>}

        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          open={open}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{showMessage}</span>}
        />
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({commonData}) => {
  const {error, loading, message} = commonData;
  return {error, loading, message};
};

export default connect(mapStateToProps, {hideMessage})(InfoView);