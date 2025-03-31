import React, { useState } from 'react';
import ChatListPanel from './ChatListPanel';
import ChatWindow from './ChatWindow';
import './assets/styles/Conversations.css';

const ConversationsPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="conversations-wrapper">
      <ChatListPanel onSelectTicket={setSelectedTicket} selectedTicket={selectedTicket} />
      <ChatWindow ticket={selectedTicket} />
    </div>
  );
};

export default ConversationsPage;