import React from 'react';
import MailListItem from './MailListItem';
import CustomScrollbars from 'util/CustomScrollbars';

const MailList = ({mails, onMailSelect, onMailChecked, onStartSelect, width}) => {
  return (
    <div className="module-list mail-list">
      <CustomScrollbars className="module-list-scroll scrollbar"
                        style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 238px)'}}>
        {mails.map((mail, index) =>
          <MailListItem key={index} mail={mail} onMailSelect={onMailSelect} onMailChecked={onMailChecked}
                        onStartSelect={onStartSelect}/>
        )}
      </CustomScrollbars>
    </div>
  )
};

export default MailList;