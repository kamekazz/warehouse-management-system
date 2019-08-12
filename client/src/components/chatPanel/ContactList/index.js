import React from 'react';
import UserCell from "./UserCell/index";

const ContactList = ({onSelectUser, selectedSectionId, contactList}) => {
  return (
    <div className="chat-user">
      {contactList.map((user, index) =>
        <UserCell key={index} user={user} selectedSectionId={selectedSectionId} onSelectUser={onSelectUser}/>
      )}
    </div>
  )
};

export default ContactList;