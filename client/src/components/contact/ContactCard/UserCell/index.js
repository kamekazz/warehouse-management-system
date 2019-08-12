import React from 'react';

const UserCell = ({chat, onSelectUser}) => {
  return (
    <div className="row " onClick={() => {
      onSelectUser(chat);
    }}>

      <div className="col-auto ">
        <img src={chat.thumb} className="rounded-circle size-40" alt={chat.name}/>
        <i className="zmdi zmdi-dot-circle"/>
      </div>

      <div className="col-6 px-2">
        <span className="name h6">{chat.name}</span>
        <p className="last-message text-truncate text-muted">{chat.lastMessage}</p>
      </div>

      <div className="col-auto ">
        <div className="last-message-time">{chat.lastMessageTime}</div>

        <div className="bg-primary badge">{chat.unreadMessage}</div>

      </div>
    </div>
  )
};

export default UserCell;