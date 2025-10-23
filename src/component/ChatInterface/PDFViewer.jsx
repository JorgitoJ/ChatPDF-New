import {useState} from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const PDFViewer = ({pdfFile}) => {
  


    const [numPages, setNumPages] = useState(0);  
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);


    const goToPreviousPage = () =>{
        setPageNumber(prev => Math.max(prev-1 , 1));
    };

    const goToNextPage = () =>{
        setPageNumber(prev => Math.min(prev + 1, numPages));
    };

    const zoomIn = () =>{
        setScale(prev => Math.min(prev + 0.2, 2.0));
    };

    const zoomOut = () =>{
        setScale(prev => Math.max(prev - 0.2, 0.5));
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
}

    

    return (
    <div className='flex flex-col bg-gray-50'>
        <div className='bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky z-10 top-19'>
            <div className='flex items-center gap-2'>
                <button 
                    onClick={goToPreviousPage}
                    disabled={pageNumber<=1}
                    className='p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                    aria-label='Previous page'
                    >
                    <ChevronLeft className='w-5 h-5'/>
                </button>
                <span className='text-sm text-gray-700'>
                    Page {pageNumber} of {numPages}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={pageNumber>=numPages}
                    aria-label='Next page'
                    className='p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    <ChevronRight className='w-5 h-5'/>
                </button>
            </div>

            <div className='flex items-center gap-2'>
                <button
                  onClick={zoomOut}
                  className='p-2 rounded hover:bg-gray-100'
                  aria-label='Zoom out'
                >
                    <ZoomOut className='w-5 h-5'/>
                </button>

                <span className='text-sm text-gray-700'>{Math.round(scale * 100)}%</span>
                
                <button
                    onClick={zoomIn}
                    className='p-2 rounded hover:bg-gray-100'
                    aria-label='Zoom in'
                >
                    <ZoomIn className='w-5 h-5'/>
                </button>
            </div>
        </div>


        <div className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-center '>
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className='flex items-center justify-center p-8'>
                            <p className='text-gray-500'>Loading PDF...</p>
                        </div>
                    }
                    error={
                        <div className='flex items-center justify-center p-8'>
                            <p className='text-red-500'>Failed to load PDF.</p>
                        </div>
                    }
                >
                    <Page 
                        pageNumber={pageNumber} 
                        scale={scale}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        className='shadow-lg' 
                    />

                </Document>
            </div>
        </div>
    </div>
  )
}
