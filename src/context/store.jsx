import { create } from 'zustand';

const usePdfStore = create((set) => ({
  pdfFile: null,
  setPdfFile: (fileInfo) => set({ pdfFile: fileInfo }),
  clearPdfFile: () => set({ pdfFile: null }),
}));

export default usePdfStore;