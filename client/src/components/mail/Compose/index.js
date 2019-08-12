import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ComposeMail extends React.Component {
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
    const {onMailSend, onClose, user} = this.props;
    const {to, subject, message} = this.state;
    return (
      <Modal className="modal-box modal-box-mail" toggle={onClose} isOpen={this.props.open}
             style={{zIndex: 2600}}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          New Message
          <IconButton className="text-white"
                      onClick={onClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>
        <div className="modal-box-content d-flex flex-column">

          <TextField
            id="required"
            label="To*"
            onChange={(event) => this.setState({to: event.target.value})}
            defaultValue={to}
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

        <div className="modal-box-footer">
          <Button className="attach-file jr-btn text-muted">
            <i className="zmdi zmdi-attachment mr-2 zmdi-hc-2x"/> Attach File
          </Button>

          <Button disabled={to === ''} variant="contained" color="primary" onClick={() => {
            onClose();
            onMailSend(
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

          }}>
            <i className="zmdi zmdi-mail-send mr-2"/> Send Message</Button>
        </div>
      </Modal>
    );
  }
}

export default ComposeMail;