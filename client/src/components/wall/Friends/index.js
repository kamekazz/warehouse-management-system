import React from "react";
import WidgetHeader from "components/WidgetHeader/index";

function Status(props) {
  const isType = props.isType;
  if (isType === 'online') {
    return <span className="badge-status-dot bg-success"/>;
  } else if (isType === 'away') {
    return <span className="badge-status-dot bg-warning"/>;
  } else {
    return <span className="badge-status-dot bg-red"/>;
  }
}

const Friends = ({friendList}) => {
  return (
    <div className="jr-entry-sec">
      <WidgetHeader title={<span>Friends - 530 <span className="text-grey">(27 Mutual)</span></span>}/>
      <ul className="jr-fnd-list">
        {friendList.map((user, index) =>
          <li className="mb-2" key={index}>
            <div className="jr-user-fnd">
              <img alt="..." src={user.image}/>
              <div className="jr-user-fnd-content">
                <span className="jr-badge"><Status isType={user.status}/></span>
                <h6>{user.name}</h6>
              </div>
            </div>
          </li>
        )
        }
      </ul>
    </div>
  )
};
export default Friends;
