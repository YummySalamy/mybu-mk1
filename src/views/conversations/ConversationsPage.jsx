import React, { useState, useEffect } from 'react';
import ChatListPanel from './ChatListPanel';
import ChatWindow from './ChatWindow';
import './assets/styles/Conversations.css';

const ConversationsPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedTicket(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="conversations-wrapper">
      <ChatListPanel onSelectTicket={setSelectedTicket} selectedTicket={selectedTicket} />
      <ChatWindow ticket={selectedTicket} />
    </div>
  );
};

export default ConversationsPage;