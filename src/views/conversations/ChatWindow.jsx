import React, { useState, useRef, useEffect } from 'react';
import { FaCheckDouble, FaPaperclip, FaMicrophone, FaRegCalendarAlt, FaPaperPlane } from 'react-icons/fa';
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdOutlineMore } from 'react-icons/md';
import { IoIosMore } from 'react-icons/io';
import './assets/styles/ChatWindow.css';

const ChatWindow = ({ ticket }) => {

    const [messages] = useState([
        {
            id: 'm1',
            sender: 'client',
            content: 'Hola, necesito ayuda con un pedido.',
            image_url: '',
            time_sent: '10:31 AM',
            read: true,
        },
        {
            id: 'm2',
            sender: 'human_agent',
            content: '¡Claro! ¿Podrías darme el número del pedido?',
            image_url: '',
            time_sent: '10:32 AM',
            read: true,
        },
        {
            id: 'm3',
            sender: 'ai_agent',
            content: 'Aquí tienes la información de tu pedido: #A12345',
            image_url: '',
            time_sent: '10:33 AM',
            read: false,
        },
        {
            id: 'm4',
            sender: 'client',
            content: 'Gracias por la info. Está perfecto.',
            image_url: 'https://cdn.wccftech.com/wp-content/uploads/2024/09/Sony-PlayStation-5-Pro-_-AMD-SoC-_7.png',
            time_sent: '10:34 AM',
            read: true,
        },
        {
            id: 'm5',
            sender: 'human_agent',
            content: '¡Excelente! ¿Hay algo más en lo que pueda ayudarte?',
            image_url: '',
            time_sent: '10:35 AM',
            read: false,
        },
        {
            id: 'm6',
            sender: 'client',
            content: 'No, eso es todo. ¡Gracias!',
            image_url: '',
            time_sent: '10:36 AM',
            read: false,
        },
        {
            id: 'm7',
            sender: 'ai_agent',
            content: '¡De nada! ¡Que tengas un excelente día!',
            image_url: '',
            time_sent: '10:37 AM',
            read: false,
        },
        {
            id: 'm8',
            sender: 'client',
            content: 'Hola de nuevo, tengo otra consulta.',
            image_url: '',
            time_sent: '9:15 AM',
            read: true,
        },
        {
            id: 'm9',
            sender: 'human_agent',
            content: '¡Hola! Claro, ¿en qué puedo ayudarte hoy?',
            image_url: '',
            time_sent: '9:16 AM',
            read: true,
        },
        {
            id: 'm10',
            sender: 'client',
            content: '¿Pueden enviarme una copia de mi factura?',
            image_url: '',
            time_sent: '9:17 AM',
            read: false,
        },
        {
            id: 'm11',
            sender: 'ai_agent',
            content: 'Por supuesto, aquí tienes tu factura: [Factura #B67890]',
            image_url: '',
            time_sent: '9:18 AM',
            read: false,
        },
        {
            id: 'm12',
            sender: 'client',
            content: '¡Perfecto! Muchas gracias.',
            image_url: '',
            time_sent: '9:19 AM',
            read: false,
        },
        {
            id: 'm13',
            sender: 'human_agent',
            content: '¡De nada! Si necesitas algo más, no dudes en escribirnos.',
            image_url: '',
            time_sent: '9:20 AM',
            read: false,
        },
    ]);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        const newMessage = {
            id: `m${messages.length + 1}`,
            sender: 'client',
            content: message,
            image_url: '',
            time_sent: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            read: false,
        };
        setMessage('');
        // Aquí se enviaría el mensaje a la API
    };

    

    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-window">
        {!ticket ? (
            <div className="empty-chat">
            <p>Selecciona una conversación para comenzar</p>
            <IoChatbubblesSharp size={48} style={{ color: 'var(--icon-active)' }} />
            </div>
        ) : (
            <div className="chat-view">
            <div className="chat-header-bar">
                <div className="user-info">
                <img src="https://i.pravatar.cc/40?img=12" alt="avatar" className="user-avatar" />
                <span className="user-name">{ticket.name}</span>
                </div>
                <button className="header-more-btn">
                <IoIosMore size={22} />
                </button>
            </div>

            <div className="messages-container">
                {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`message-bubble ${msg.sender}`}
                    title={`Remitente: ${msg.sender}`}
                >
                    <div className="message-content">
                    {msg.image_url && <img src={msg.image_url} alt="media" className="message-image" />}
                    <span className="text">{msg.content}</span>
                    </div>
                    <div className="message-meta">
                    <span className={`time ${msg.sender === 'client' ? 'left' : 'right'}`}
                    >{msg.time_sent}</span>
                    <FaCheckDouble
                        className={`check-icon ${msg.read ? 'read' : 'unread'}`}
                        title={msg.read ? 'Leído' : 'No leído'}
                    />
                    </div>
                </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
                <div className="input-actions">
                <button><FaPaperclip /></button>
                <button><FaRegCalendarAlt /></button>
                <button><MdOutlineMore /></button>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Escribe un mensaje..." />
                    <button 
                    className="send-button"
                    onClick={handleSendMessage}
                    ><FaPaperPlane /></button>
                </div>
                <button className="mic-button"><FaMicrophone /></button>
            </div>
            </div>
        )}
        </div>
    )
};

export default ChatWindow;