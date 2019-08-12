import React, {Component} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import DisplayDate from "../DisplayDate/index";
import {Input} from "reactstrap";

class CommentBox extends Component {

  state = {
    isComment: false,
    commentData: {
      id: 0,
      user: {},
      isLike: true,
      likeCount: 0,
      date: '',
      commentList: [],
      comment: ''
    },
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCommentToggle();
    }
  }

  componentWillMount() {
    this.setState({commentData: this.props.commentData})
  }

  handleLikeToggle() {
    this.setState((previousState) => ({
      commentData: {
        ...previousState.commentData,
        isLike: !previousState.commentData.isLike,
        likeCount: (previousState.commentData.isLike === true ? previousState.commentData.likeCount - 1 : previousState.commentData.likeCount + 1)
      }
    }));
  }

  handleCommentToggle() {
    this.setState((previousState) => ({
        isComment: !previousState.isComment,
      }
    ));
  }

  render() {
    const {user, isLike, date, comment} = this.state.commentData;
    return (
      <div className="media flex-nowrap jr-wall-user-info mb-3">
        <Avatar alt="..." className="mr-3 jr-size-40" src={user.image}/>
        <div className="media-body">
          <h5 className="jr-wall-user-title">{user.name}</h5>
          <DisplayDate date={date}/>
          <p className="mt-2">{comment}</p>
          <div className="flex-row">
            <Button variant="contained" color="primary" className="mr-3 mb-1" size="small"
                    onClick={this.handleLikeToggle.bind(this)}>{isLike === true ? 'Like' : 'UnLike'}</Button>
            <Button variant="contained" className="bg-light-blue text-white mb-1" size="small"
                    onClick={this.handleCommentToggle.bind(this)}>Comment</Button>
          </div>
          {this.state.isComment === true ? <div className="media mt-3">
            <Avatar className="mr-3 size-30" src={user.image}/>
            <div className="media-body">
              <Input
                id="required" className="border-0"
                placeholder="Type Comments"
                onKeyPress={(event) => this._handleKeyPress(event)}
              />
            </div>
          </div> : null}

        </div>
      </div>
    )
  }
}

export default CommentBox;
