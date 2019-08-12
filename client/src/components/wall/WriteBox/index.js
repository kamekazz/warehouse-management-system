import React, {Component} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Card, Modal, ModalHeader} from "reactstrap"
import TextField from '@material-ui/core/TextField';
import Dropzone from 'react-dropzone';
import Divider from '@material-ui/core/Divider';

class WriteBox extends Component {

  state = {
    commentText: '',
    previewVisible: false,
    previewImage: '',
    fileList: [],
    rejected: [],
    isOpen: false,
  };

  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    console.log("previewImage", file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  onDrop = files => {
    console.log("file-->", files)
    this.setState({
      fileList: files,
    });
  };

  handleChange = ({fileList}) => {
    console.log("fileList", fileList)
    this.setState({fileList})
  }

  handleClickImage() {
    this.setState((previousState) => ({
      isOpen: !previousState.isOpen
    }));
  }

  handleAddPost() {
    this.props.addPost(this.state.commentText, this.state.fileList);
    this.setState({
      commentText: '',
      previewVisible: false,
      previewImage: '',
      fileList: [],
      isOpen: false,
    });
  }

  onChange(e) {
    this.setState({commentText: e.target.value})
  }

  render() {
    const {previewVisible, previewImage, fileList} = this.state;
    console.log("this.state.fileList.length", fileList.length)
    const isEnabled = fileList.length === 0 && this.state.commentText === "";

    return (
      <Card className="jr-card">
        <div className="media mb-2">
          <Avatar className="size-50 mr-3" src={this.props.user.image}/>
          <div className="media-body">
            <TextField
              id="exampleTextarea"
              placeholder="Whats in your mind?"
              label="Whats in your mind?"
              value={this.state.commentText}
              onChange={(event) => this.onChange(event)}
              multiline
              fullWidth
              className="jr-wall-textarea"
              margin="none"
              variant="outlined"
              rows="4"
            />
          </div>
        </div>

        <div className="jr-clearfix">
          {this.state.isOpen === true ? <div className="d-flex flex-row">
              <ul className="list-inline mb-3 mr-2">
                {fileList.map((user, index) =>
                  <li className="mb-1 mr-0 list-inline-item align-top" key={index}>
                    <img alt="..." className="size-60 rounded" src={user.preview}/>
                  </li>
                )
                }
              </ul>
              <Dropzone
                className="jr-wall-dropzone" onDrop={this.onDrop}><i className="zmdi zmdi-collection-image"/></Dropzone>
            </div>
            : null}
          <Divider/>

          <Modal isOpen={previewVisible} toggle={this.handleCancel}>
            <ModalHeader toggle={this.toggle}>Slide Show</ModalHeader>
            <img alt="example" style={{width: '100%'}} src={previewImage}/>
          </Modal>
        </div>

        <div className="d-flex flex-row align-items-center mt-2">
          <div className="pointer" onClick={this.handleClickImage.bind(this)}>
            <i className="zmdi zmdi-camera mr-2 jr-fs-xl d-inline-flex align-middle"/>
            <span className="jr-fs-sm"> Add Photos/Album </span>
          </div>

          <Button color="primary" size='small' className="ml-auto mb-0"
                  disabled={(isEnabled) ? "disabled" : ""}
                  onClick={this.handleAddPost.bind(this)}>SEND
          </Button>
        </div>
      </Card>
    )
  }
}

export default WriteBox;
