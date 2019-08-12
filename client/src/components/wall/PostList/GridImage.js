import React, {Component} from "react";

class GridImage extends Component {

  handleCancel() {
    this.props.handleToggle();
  }

  render() {
    const {mediaList} = this.props;
    switch (mediaList.length) {
      case 1:
        return <div className="jr-gallery-item" onClick={this.handleCancel.bind(this)}>
          <img className="jr-img-fluid" src={mediaList[0].image} alt="post"/>
        </div>
      case 2:
        return <div className="jr-gallery-grid jr-gallery-2" onClick={this.handleCancel.bind(this)}>
          <div className="jr-gallery-item">
            <img className="jr-img-fluid" src={mediaList[0].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img className="jr-img-fluid" src={mediaList[1].image} alt="post"/>
          </div>
        </div>
      case 3:
        return <div className="jr-gallery-grid jr-gallery-3" onClick={this.handleCancel.bind(this)}>
          <div className="jr-gallery-item">
            <img className="jr-img-fluid" src={mediaList[0].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img className="jr-img-fluid" src={mediaList[1].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img className="jr-img-fluid" src={mediaList[2].image} alt="post"/>
          </div>
        </div>
      case 4:
        return <div className="jr-gallery-grid jr-gallery-4" onClick={this.handleCancel.bind(this)}>
          <div className="jr-gallery-item">
            <img src={mediaList[0].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img src={mediaList[1].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img src={mediaList[2].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img src={mediaList[3].image} alt="post"/>
          </div>
        </div>
      default:
        return <div className="jr-gallery-grid jr-gallery-4-more" onClick={this.handleCancel.bind(this)}>
          <div className="jr-gallery-item">
            <img src={mediaList[0].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img src={mediaList[1].image} alt="post"/>
          </div>
          <div className="jr-gallery-item thumb">
            <img src={mediaList[2].image} alt="post"/>
          </div>
          <div className="jr-gallery-item">
            <img src={mediaList[3].image} alt="post"/>
            <div className="jr-gallery-item-content">
              <h1 className="text-white">+ {mediaList.length - 3}</h1>
            </div>
          </div>
        </div>
    }
  }
}

export default GridImage;
