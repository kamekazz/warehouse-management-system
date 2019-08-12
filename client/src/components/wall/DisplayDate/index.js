import React from "react";
import moment from "moment";

const DisplayDate = ({date}) => {
  const postDate = moment(date, 'ddd MMM DD YYYY kk:mm:ss Z');
  const currentDate = moment(new Date());
  const duration = moment.duration(currentDate.diff(postDate));
  const minutes = (duration.asMinutes() | 0);
  const hours = (duration.asHours() | 0);

  switch (true) {
    case minutes === 0:
      return <p className="jr-text-grey jr-fs-sm jr-mb-0">Just now</p>;
    case minutes < 60:
      return <p className="jr-text-grey jr-fs-sm jr-mb-0">{minutes} min</p>;
    case hours < 24:
      return <p className="jr-text-grey jr-fs-sm jr-mb-0">{hours} hours</p>;
    default:
      return <p className="jr-text-grey jr-fs-sm jr-mb-0">{postDate.format("DD MMM, YYYY")}</p>
  }
};

export default DisplayDate;
