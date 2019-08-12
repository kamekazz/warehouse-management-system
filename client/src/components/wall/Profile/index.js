import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import Auxiliary from "util/Auxiliary";

class Profile extends Component {

  state = {
    isFollow: false
  }

  handleToggle = () => {
    this.setState((previousState) => ({
      isFollow: !previousState.isFollow
    }));
  }

  render() {
    const {user, userInfo} = this.props;
    const {id, name, image, address} = user;
    const {followers, following, frinds} = userInfo;
    return (
      <Auxiliary>
        <div className="jr-profileon">
          <div className="jr-profileon-thumb jr-profileon-thumb-htctrcrop">
            <img src={image} alt=''/>
          </div>
          <div className="jr-profileon-content">
            <p className="jr-profileon-title">{name}</p>
            <span className="jr-fs-sm">{address}</span>
          </div>
        </div>

        <div className="jr-follower text-center">
          <ul className="jr-follower-list">
            <li>
              <span className="jr-follower-title">{followers}</span>
              <span>Followers</span>
            </li>
            <li>
              <span className="jr-follower-title">{following}</span>
              <span>Following</span>
            </li>
            <li>
              <span className="jr-follower-title">{frinds}</span>
              <span>project</span>
            </li>
          </ul>
        </div>
        <div className="mb-xl-4 mb-3">
          <p>You are following {name}</p>
          {this.props.authUser === id ? null :
            <Button size="small" variant="contained" className="mb-0" color="primary"
                    onClick={this.handleToggle}>{this.state.isFollow === true ? 'Follow' : 'Unfollow'}</Button>
          }
        </div>
      </Auxiliary>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const {authUser} = auth;
  return {authUser}
};

export default connect(mapStateToProps)(Profile)
