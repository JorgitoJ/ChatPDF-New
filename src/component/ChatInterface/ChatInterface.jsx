import usePdfStore from '../../context/store';
import { ChatBox } from './ChatBox';
import { PDFViewer } from './PDFViewer'

export const ChatInterface = () => {
    const pdfFile = usePdfStore((state) => state.pdfFile);
    
    if(!pdfFile || !pdfFile.file){
        console.log('No PDF file found in store.');
        return (
            <div className='grid grid-cols-2 h-[calc(100vh-72px)]'>
                <div className='place-items-center grid border rounded-xl border-gray-400 m-4'>
                    <p className='text-gray-600 '>No PDF loaded. Please upload a PDF to begin</p>
                </div>
                <ChatBox className=""/>
            </div>
        )
    }
    
    return (
        <div className='h-[calc(100vh-72px)] grid grid-cols-2 gap-4 p-4' >
            <div className='h-full overflow-hidden'>
                <PDFViewer pdfFile={pdfFile.file}/>
            </div>
            <div className='h-full overflow-hidden'>
                <ChatBox/>
            </div>
        </div>
  )
}
