import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import labels from 'app/routes/mail/data/labels';
import CustomScrollbars from 'util/CustomScrollbars';

class MailDetail extends React.Component {

  state = {
    anchorEl: undefined,
    open: false,
    showDetail: false
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    const {mail, onStartSelect, onImportantSelect, width} = this.props;
    const options = [
      'Reply',
      'Forward',
      'Print',
    ];


    return (
      <div className="module-detail mail-detail">
        <CustomScrollbars className="module-list-scroll scrollbar" style={{
          height: width >= 1200 ? 'calc(100vh - 309px)' : 'calc(100vh - 288px)'
        }}>
          <div className="mail-header">

            <div className="mail-header-content col pl-0">
              <div className="subject">
                {mail.subject}
              </div>

              <div className="labels">
                {labels.map((label, index) => {
                  return (mail.labels).includes(label.id) && <div key={index}
                                                                  className={`badge text-white bg-${label.color}`}>{label.title}</div>
                })}
              </div>


            </div>

            <div className="mail-header-actions">

              <IconButton type="button" className="icon-btn" onClick={() => {
                onStartSelect(mail);
              }}>
                {mail.starred ?
                  <i className="zmdi zmdi-star"/> :
                  <i className="zmdi zmdi-star-outline"/>
                }

              </IconButton>
              <IconButton type="button" className="icon-btn" onClick={() => {
                onImportantSelect(mail);
              }}>

                {mail.important ?
                  <i className="zmdi zmdi-label-alt"/>
                  : <i className="zmdi zmdi-label-alt-outline"/>
                }
              </IconButton>
            </div>

          </div>
          <hr/>

          <div className="mail-user-info">

            {mail.from.avatar === '' ?
              <div
                className="bg-blue avatar rounded-circle size-40 text-white text-center"
                style={{fontSize: 16}}> {mail.from.name.charAt(0).toUpperCase()}</div> :
              <img className="rounded-circle avatar size-40" alt="Alice Freeman"
                   src={mail.from.avatar}/>
            }

            <div className="sender-name">{mail.from.name}
              <div className="send-to text-grey">to me</div>
            </div>


            <IconButton
              aria-label="More"
              aria-owns={this.state.open ? 'long-SidenavContent.js' : null}
              aria-haspopup
              onClick={this.handleClick}>
              <MoreVertIcon/>
            </IconButton>

            <Menu id="long-menu"
                  anchorEl={this.state.anchorEl}
                  open={this.state.open}
                  onClose={this.handleRequestClose}

                  MenuListProps={{
                    style: {
                      width: 200,
                    },
                  }}>
              {options.map(option =>
                <MenuItem key={option} onClick={this.handleRequestClose}>
                  {option}
                </MenuItem>,
              )}
            </Menu>

          </div>


          <div className="show-detail" onClick={() => {
            this.setState({showDetail: !this.state.showDetail});
          }}>{this.state.showDetail ? 'Hide Detail' : 'Show Detail'}</div>
          {this.state.showDetail && (<div>
            <div>
              <strong>From: </strong>{mail.from.email}
            </div>
            < div>
              < strong> To: </strong>
              {
                mail.to.map((to, index) => <span>{index > 0 && ', '} {to.email}</span>)
              }
            </div>
            <div><strong>Date: </strong>{mail.time} </div>
          </div>)}


          <p className="message">
            {mail.message}
          </p>

          {mail.hasAttachments &&
          <div className="attachment-block">
            <h3>Attachments ({mail.hasAttachments.length})</h3>
            <div className="row">
              {mail.attachments.map((attachment, index) =>
                <div className="col-3" key={index}>
                  <img className="size-100" src={attachment.preview} alt={attachment.fileName}/>
                  <div className="size">{attachment.size}</div>
                </div>
              )}
            </div>
          </div>
          }

        </CustomScrollbars>
      </div>
    );
  }
}

export default MailDetail;