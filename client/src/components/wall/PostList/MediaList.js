import React, {Component} from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GreedImage from "./GridImage";
import Auxiliary from "util/Auxiliary";

class MediaList extends Component {

  state = {
    previewVisible: false,
  }

  handleToggle() {
    this.setState((previousState) => ({
      previewVisible: !previousState.previewVisible,
    }));
  }

  render() {
    return (
      <Auxiliary>
        <GreedImage mediaList={this.props.mediaList} handleToggle={this.handleToggle.bind(this)}/>
        <Modal isOpen={this.state.previewVisible} toggle={this.handleToggle.bind(this)}>
          <ModalHeader toggle={this.handleToggle.bind(this)}>Slide Show</ModalHeader>
          <ModalBody>
            <Carousel mediaList={this.props.mediaList}/>
          </ModalBody>
        </Modal>
      </Auxiliary>
    );
  }
}

function Carousel(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides'
  };
  return (
    <Auxiliary>
      <Slider {...settings}>
        {props.mediaList.map((media, index) =>
          <div key={index}>
            <img alt="example" style={{width: '100%'}} src={media.image}/>
          </div>
        )
        }
      </Slider>
    </Auxiliary>
  );
}

export default MediaList;
