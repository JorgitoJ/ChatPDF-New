import UploadPDF from './UploadPDF';
import { CircleCheckBig } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePdfStore from '../../context/store';

export const Desk = () => {
  
  const setPDFFile = usePdfStore((state) => state.setPdfFile);
  
  const handleFileSelect = (file) => {
    console.log('Archivo seleccionado:', file);
    // Aquí puedes enviarlo al backend o procesarlo
    // const fileURL = URL.createObjectURL(file);
    // console.log('URL del archivo:', fileURL);
    const fileInfo = {
      name: file.name,
      // url: fileURL,
      size: file.size,
      file: file
    };
    
    setPDFFile(fileInfo);
  };


  const navigate = useNavigate();
  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div className="md:px-50 px-20">
        <div>
          <p className='text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900'>Chat with your PDF</p>
          <p className='text-base font-normal leading-normal text-gray-500 dark:text-gray-400'>
                Upload a document to get started.
            </p>
        </div>

        <div className='my-10'>
          <UploadPDF onFileSelect={handleFileSelect} />
        </div>
        
        
        <div className='flex justify-center'>
          <button 
            className='bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors' 
            onClick={goToChat}
            >Start Chat</button>
        </div>


        <div className='mt-10 mb-10 p-5  bg-[#DFE9F4] rounded-lg'>
          <h3 className='text-xl font-semibold text-gray-900 '>How it Works</h3>
          
          <ul className='space-y-2 pt-2'>
          
            <li className='flex gap-1'>
              <CircleCheckBig color="#207CD6" className='pt-1' />
              <p className='text-gray-600'><span className='font-semibold'> Step 1: Upload your PDF.</span> Simply drag and drop your file or use the "Browse Files" button.</p>
            </li>
          
            <li className='flex gap-1'>
              <CircleCheckBig color="#207CD6" className='pt-1' />
              <p className='text-gray-600'><span className='font-semibold'> Step 2: Start Chatting.</span> Once uploaded, click "Start Chat" to open the conversation interface.</p>
            </li>
          
            <li className='flex gap-1 '>
              <CircleCheckBig color="#207CD6" className='pt-1' />
              <p className='text-gray-600'><span className='font-semibold'> Step 3: Ask anything.</span> Ask questions, get summaries, find information, and more!</p>
            </li>
          
          </ul>
        </div>
    </div>
  )
}
