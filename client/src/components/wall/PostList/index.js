import React, {Component} from "react";
import PostItem from "./PostItem";
import WriteBox from "../../../components/wall/WriteBox/index";
import Auxiliary from "../../../util/Auxiliary";

class PostList extends Component {

  state = {
    postList: [],
    user: {}
  }

  componentWillMount() {
    this.setState({postList: this.props.postList, user: this.props.user})
  }


  addPost(commentText, imageList) {

    const post = {
      id: Math.random() * 1343300,
      text: commentText,
      user: this.state.user,
      date: new Date().toString(),
      mediaList: imageList.map(data => {
        return {image: data.preview}
      }),
      viewCount: 0,
      likeCount: 0,
      isLike: false,
      commentCount: 0,
      commentList: [],
    };
    console.log("Post Data :==()==>", post)

    let postArray = this.state.postList;
    postArray.unshift(post);
    this.setState({
      postList: postArray
    });
  }

  render() {
    return (
      <Auxiliary>
        <WriteBox addPost={this.addPost.bind(this)} user={this.state.user}/>
        {this.state.postList.map((post) => {
            return <PostItem key={post.id} index={post.id} postData={post} user={this.state.user}/>
          }
        )}
      </Auxiliary>
    )
  }
}

export default PostList
