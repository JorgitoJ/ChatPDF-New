import { create } from 'zustand';

const useChatStore = create((set, get) => ({
  messages: [],
  isLoading: false,
  
 
  sendUserMessage: (text) => {
    
    if(get().isLoading){
        console.log('Chat is loading, please wait.');
        return; 
    }

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    
    set((state) => ({
      messages: [...state.messages, userMessage],
      isLoading: true
    }));
    
    // Simular respuesta del asistente después de 1 segundo
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        text: `He recibido tu mensaje: "${text}". ¿En qué más puedo ayudarte?`,
        sender: 'assistant',
        timestamp: new Date().toISOString()
      };
      
      set((state) => ({
        messages: [...state.messages, assistantMessage],
        isLoading: false
      }));
    }, 1000);
  },
  
  // Limpiar el chat
  clearChat: () => {
    set({ messages: [], isLoading: false });
  }
}));

export default useChatStore;