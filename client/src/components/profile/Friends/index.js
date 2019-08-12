import React from "react";
import Widget from "../../Widget/index";

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
    <Widget styleName="jr-card-profile-sm"
            title={<span>Friends - 530 <span className="text-grey">(27 Mutual)</span></span>}>
      <div className="pt-2">
        <ul className="jr-fnd-list mb-0">
          {friendList.map((user, index) =>
            <li className="mb-2" key={index}>
              <div className="jr-user-fnd">
                <img alt="..." src={user.image}/>
                <div className="jr-user-fnd-content">
                  {console.log("user.status", user.status)}
                  <span className="jr-badge"><Status isType={user.status}/></span>
                  <h6>{user.name}</h6>
                </div>
              </div>
            </li>
          )
          }
        </ul>
      </div>
    </Widget>
  )
};
export default Friends;
