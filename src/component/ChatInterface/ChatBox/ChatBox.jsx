import React, { useRef } from 'react'
import { InputBox } from './InputBox'
import useChatStore from '../../../context/chatstore';
import { MessagesSquare } from 'lucide-react';

export const ChatBox = () => {
  const messages = useChatStore((state) => state.messages);
  const clearChat = useChatStore((state) => state.clearChat);
  const isLoading = useChatStore((state) => state.isLoading);
  const messagesEndRef = useRef(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white  rounded-lg shadow-md">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3 border-b border-gray-200 sticky top-0 z-10">
        <div className='flex gap-2 items-center'>
          <h2 className="text-lg font-medium text-gray-600">Asistente</h2>
          <MessagesSquare color='gray' />
        </div>
        
        <button
          onClick={clearChat}
          className="text-sm text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 transition-colors cursor-pointer"
          disabled={messages.length === 0 && !isLoading}
        >
          Limpiar Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-gray-400 mb-2">💬</div>
            <p className="text-gray-500 text-sm">
              Haz una pregunta sobre tu PDF para comenzar la conversación
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  message.sender === 'user' ? 'ml-auto bg-blue-100 text-gray-900 rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm">
                  {message.text}
                </p>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2 max-w-[70%]">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-gray-600">El asistente está escribiendo...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <InputBox />
    </div>
  );
};
