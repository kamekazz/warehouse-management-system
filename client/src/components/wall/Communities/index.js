import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WidgetHeader from "components/WidgetHeader/index";

class Communities extends Component {
  render() {
    const {communitiesList} = this.props;
    return (
      <div className="jr-entry-sec">
        <WidgetHeader title="Communities"/>
        <ul className="jr-gallery-list">
          {communitiesList.map((communities, index) =>
            <li key={index}>
              <div className="jr-gallery-thumb">
                <img alt="..." src={communities.image}/>
                <div className="jr-gallery-thumb-content">
                  <h6>{communities.title}</h6>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Communities
