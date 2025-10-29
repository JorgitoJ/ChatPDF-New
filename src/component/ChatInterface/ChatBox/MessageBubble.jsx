export const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${
      isUser 
        ? 'justify-end' 
        : 'justify-start'
      } mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2  ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {/* Evitar overflow con palabras largas y mantener saltos de línea */}
        <div className="flex flex-col">
          <p className="text-sm wrap-break-word whitespace-pre-wrap">{message.text}</p>
          {/* Colocar la hora a la derecha dentro de la burbuja */}
          <div className="flex justify-end">
            <span className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
              {/* Mostrar la hora, usar fallback si no existe message.timestamp */}
              {new Date(message.timestamp || Date.now()).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};