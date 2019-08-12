import React from 'react';
import ReceivedMessageCell from "./ReceivedMessageCell/index";
import SentMessageCell from "./SentMessageCell/index";

const Conversation = ({conversationData, selectedUser}) => {

  return (
    <div className="chat-main-content">
      {conversationData.map((conversation, index) => conversation.type === 'sent' ?
        <SentMessageCell key={index} conversation={conversation}/> :
        <ReceivedMessageCell key={index} conversation={conversation} user={selectedUser}/>
      )}
    </div>
  )
};

export default Conversation;