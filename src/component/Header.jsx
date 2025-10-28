import { Command } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    };

    return (
    <div className='py-3 md:px-50 px-20 sticky top-0 z-20 border-b border-gray-200 backdrop-blur-sm '>
        <div className='flex gap-1 items-center py-1'>
            
            <div onClick={goToHome} className='cursor-pointer'>
                <Command size={32} color="#207CD6" strokeWidth={2} className='' />
                
            </div>
            <p className='text-xl font-bold leading-tight tracking-[-0.015em] text-gray-900'>
                ChatPDF
            </p>
            
        </div>
        <div className='mt-2 flex flex-col gap-1 '>
            <hr className='text-gray-300'/>

        </div>
       
    </div>
    
  )
}
