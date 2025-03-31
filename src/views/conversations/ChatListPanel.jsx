import React from 'react';
import './assets/styles/ChatListPanel.css';

const mockChats = [
  { id: '1', name: 'Juan Pérez', lastMessage: 'Hola, ¿cómo están?', time: '10:30 AM' },
  { id: '2', name: 'Empresa XYZ', lastMessage: 'Necesito más info.', time: '9:12 AM' },
  { id: '3', name: 'María Gómez', lastMessage: 'Gracias por su atención.', time: 'Ayer' },
];

const ChatListPanel = ({ onSelectTicket, selectedTicket }) => {
  return (
    <div className="chat-list-panel">
      <h2 className="panel-title">Conversaciones</h2>
      <ul className="chat-list">
        {mockChats.map((chat) => (
          <li
            key={chat.id}
            className={`chat-item ${selectedTicket?.id === chat.id ? 'active' : ''}`}
            onClick={() => onSelectTicket(chat)}
          >
            <div className="chat-info">
              <span className="chat-name">{chat.name}</span>
              <span className="chat-preview">{chat.lastMessage}</span>
            </div>
            <span className="chat-time">{chat.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatListPanel;