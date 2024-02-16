import React from 'react';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((message, index) => (
      <p key={index}>{message}</p>
    ))}
  </div>
);

export default MessageList;
