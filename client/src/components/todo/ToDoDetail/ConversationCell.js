import React from 'react';

const ConversationCell = ({conversation}) => {
  return (
    <div className="d-flex module-detail-item">
      <div className="chat-todo-avatar">

        <img className="rounded-circle avatar size-40" src={conversation.thumb}
             alt="..."/>
      </div>
      <div className="chat-toto-info">
        <div className="d-flex  flex-column">
          <div className="name mr-2">{conversation.name}</div>
          <div className="time text-muted">{conversation.sentAt}</div>
        </div>
        <div className="message">{conversation.message}</div>
      </div>
    </div>
  )
};

export default ConversationCell;