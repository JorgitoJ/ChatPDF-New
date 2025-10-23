import React, { useState } from 'react';

import { CloudUpload } from 'lucide-react';

function UploadPDF({ onFileSelect }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 transition-all ${
        dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      
      <CloudUpload size={30} color="#207CD6" strokeWidth={2} />
      <p className="text-xl text-gray-700 mb-2 font-bold">
        {fileName ? `📄 ${fileName}` : 'Drop your PDF here or browse your files'}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        Please upload a PDF to start a new chat session.
      </p>
      <input
        type="file"
        accept="application/pdf"
        id="file-upload"
        onChange={handleChange}
        className="hidden"
      />
      <label htmlFor="file-upload"> 
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer">
          Browse Files
        </button>
      </label>
    </div>
  );
}

export default UploadPDF;