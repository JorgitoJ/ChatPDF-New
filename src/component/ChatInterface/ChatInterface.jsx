
import usePdfStore from '../../context/store';
import { PDFViewer } from './PDFViewer'

export const ChatInterface = () => {
    const pdfFile = usePdfStore((state) => state.pdfFile);
    return (
        <div>
            <PDFViewer pdfFile={pdfFile.file}/>
        </div>
  )
}
