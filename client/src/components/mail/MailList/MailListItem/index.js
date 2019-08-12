import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import labels from 'app/routes/mail/data/labels'

const MailListItem = ({mail, onMailSelect, onMailChecked, onStartSelect}) => {
  return (
    <div className="module-list-item mail-cell">

      <Checkbox color="primary"
                checked={mail.selected}
                onClick={(event) => {
                  event.stopPropagation();
                  onMailChecked(mail)
                }}
                value="SelectMail"
      />
      <IconButton type="button" className="icon-btn size-50 p-0" onClick={() => {
        onStartSelect(mail);
      }}>
        {mail.starred ?
          <i className="zmdi zmdi-star"/> :
          <i className="zmdi zmdi-star-outline"/>
        }

      </IconButton>

      <div className="mail-user-info">
        {mail.from.avatar === '' ?
          <div
            className="bg-blue avatar rounded-circle size-40 text-white text-center"
            style={{fontSize: 16}}> {mail.from.name.charAt(0).toUpperCase()}</div> :
          <img className="rounded-circle avatar size-40" alt="Alice Freeman"
               src={mail.from.avatar}/>
        }
      </div>

      <div className="module-list-info" onClick={() => {
        onMailSelect(mail);
      }}>

        <div className="module-list-content">
          <div className="mail-user-info">

            <span className="sender-name text-dark">{mail.from.name}</span>

            <span className="toolbar-separator"/>

            <span className="d-inline-block text-truncate text-dark"
                  style={{maxWidth: 'calc(100% - 220px)',}}>{mail.subject}</span>

            {mail.hasAttachments &&

            <i className="zmdi zmdi-attachment"/>}

            <div className="time">{mail.time}</div>

          </div>


          <div className="message mb-2">
            <p> {mail.message}</p>

          </div>
          <div className="labels">
            {labels.map((label, index) => {
              return (mail.labels).includes(label.id) && <div key={index}
                                                              className={`badge text-white bg-${label.color}`}>{label.title}</div>
            })
            }
          </div>
        </div>

      </div>

    </div>
  )
};

export default MailListItem;