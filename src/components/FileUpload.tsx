import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileSpreadsheet, FileImage, FileText } from 'lucide-react';
import type { FileWithPreview } from '../types';

interface FileUploadProps {
  onFileUpload: (files: FileWithPreview[]) => void;
  acceptedFiles: FileWithPreview[];
}

export default function FileUpload({ onFileUpload, acceptedFiles }: FileUploadProps) {
  const onDrop = useCallback((droppedFiles: File[]) => {
    const filesWithPreview = droppedFiles.map(file => 
      Object.assign(file, {
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      })
    );
    onFileUpload(filesWithPreview);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      'text/*': ['.txt'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    }
  });

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <FileImage className="w-8 h-8 text-blue-500" />;
    if (type.includes('spreadsheet')) return <FileSpreadsheet className="w-8 h-8 text-green-500" />;
    return <FileText className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive ? (
            'Drop the files here...'
          ) : (
            'Drag & drop files here, or click to select files'
          )}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: Images (.jpg, .png), Text (.txt), Excel (.xlsx)
        </p>
      </div>

      {acceptedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded files:</h4>
          <ul className="space-y-2">
            {acceptedFiles.map((file) => (
              <li
                key={file.name}
                className="flex items-center p-2 bg-gray-50 rounded-md"
              >
                {getFileIcon(file.type)}
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}