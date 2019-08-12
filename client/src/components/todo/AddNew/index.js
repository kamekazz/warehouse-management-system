import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AttachFile from '@material-ui/icons/AttachFile';
import Delete from '@material-ui/icons/Delete';

class AddNew extends React.Component {
  constructor() {
    super();
    this.state = {
      to: '',
      cc: '',
      bcc: '',
      subject: '',
      message: '',
    }
  }

  render() {
    const {onTodoAdd, onClose, user} = this.props;
    const {to, cc, bcc, subject, message} = this.state;
    return (
      <Dialog onClose={onClose} open={this.props.open}>
        <DialogTitle>
          <div className="header" style={{minWidth: 300}}>
            <div className="subject">
              New Message
            </div>
            <IconButton
              onClick={onClose}>
              <CloseIcon/>
            </IconButton>
          </div>
        </DialogTitle>
        <div className="add-todo" style={{minWidth: 300}}>
          <div className="body d-flex flex-column" style={{width: '100%'}}>
            <TextField
              disabled
              id="required"
              label="From"
              defaultValue={user.email}
              margin="normal"/>
            <TextField
              id="required"
              label="To*"
              onChange={(event) => this.setState({to: event.target.value})}
              defaultValue={to}
              margin="normal"/>
            <TextField
              required
              id="required"
              label="CC"
              onChange={(event) => this.setState({cc: event.target.value})}
              defaultValue={cc}
              margin="normal"/>
            <TextField
              id="required"
              label="Bcc"
              onChange={(event) => this.setState({bcc: event.target.value})}
              value={bcc}
              margin="normal"/>
            <TextField
              id="required"
              label="Subject"
              onChange={(event) => this.setState({subject: event.target.value})}
              value={subject}
              margin="normal"
            />
            <TextField
              id="required"
              label="Message"
              onChange={(event) => this.setState({message: event.target.value})}
              value={message}
              multiline
              rowsMax="4"
              margin="normal"/>
          </div>

          <div className="footer d-flex flex-row">
            <Button disabled={to === ''} variant="contained" color="primary" onClick={() => {
              onClose();
              onTodoAdd(
                {
                  'id': '15453a06c08fb021776',
                  'from': {
                    'name': user.name,
                    'avatar': user.avatar,
                    'email': user.email
                  },
                  'to': [
                    {
                      'name': to,
                      'email': to
                    }
                  ],
                  'subject': subject,
                  'message': message,
                  'time': Moment().format('DD MMM'),
                  'read': false,
                  'starred': false,
                  'important': false,
                  'hasAttachments': false,
                  'folder': 1,
                  'selected': false,
                  'labels': [],
                })

            }}>Save ToDo</Button>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton onClick={() => {
              onClose();
            }}>
              <Delete/>
            </IconButton>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default AddNew;