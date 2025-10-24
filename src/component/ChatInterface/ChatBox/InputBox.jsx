import { SendHorizontal } from 'lucide-react'
import {useState } from 'react';
import useChatStore from '../../../context/chatstore';

export const InputBox = () => {
    const [inputText, setInputText] = useState('');
    const {sendUserMessage, isLoading} = useChatStore();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputText.trim()!==''  && !isLoading){
            sendUserMessage(inputText.trim());
            setInputText('');
        }
    }
   
  
    return (
    <div className='pt-10 pb-4 sticky bottom-0'>
         <div className=' flex justify-center rounded-xl'>
            <div className='w-full flex p-2 gap-2 items-center'>
             <textarea                 
                typeof='text'
                name='input'
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className=" text-gray-600  w-full min-h-[50px] max-h-48 px-4 py-3 rounded-lg resize-none border border-gray-400 focus:outline-none  disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={isLoading}
                placeholder={isLoading ? "El asistente está pensando…" : "Escribe tu pregunta..."}
             />
             <button 
                className='p-2 cursor-pointer rounded-lg h-fit flex items-center bg-[#4f46e5] hover:bg-[#827ce6] transition' 
                onClick={handleSubmit} 
                type='submit'
                disabled={inputText.trim() === '' || isLoading}
            ><SendHorizontal color="white" /></button>

             </div>
         </div>
     </div>
  )
}


