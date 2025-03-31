import React from 'react';
import './assets/styles/ChatWindow.css';

const ChatWindow = ({ ticket }) => {
  return (
    <div className="chat-window">
      {!ticket ? (
        <div className="empty-chat">
          <p>Selecciona una conversación para comenzar</p>
        </div>
      ) : (
        <div className="chat-view">
          <h3 className="chat-header">Conversación con {ticket.name}</h3>
          {/* Aquí irá la lógica de mensajes del chat en el futuro */}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;