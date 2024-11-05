import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { analyzeField } from './lib/openai';
import { MetadataDisplay } from './components/MetadataDisplay';
import { metadataFields } from './lib/metadata-fields';
import type { MetadataField, MetadataCategory } from './types';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<MetadataCategory[]>(
    metadataFields.map(category => ({
      name: category.name,
      fields: category.fields.map(field => ({
        ...field,
        value: null,
        reasoning: null
      }))
    }))
  );

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setSelectedFile(file);
    
    if (file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    } else {
      setFilePreview(null);
    }
    
    setCategories(prev => prev.map(category => ({
      ...category,
      fields: category.fields.map(field => ({
        ...field,
        value: null,
        reasoning: null
      }))
    })));
  };

  const handleAnalyzeField = async (fieldToAnalyze: MetadataField) => {
    if (!selectedFile) return;

    setError(null);
    
    setCategories(prev => prev.map(category => ({
      ...category,
      fields: category.fields.map(field => 
        field.id === fieldToAnalyze.id
          ? { ...field, isLoading: true }
          : field
      )
    })));

    try {
      const content = await selectedFile.arrayBuffer();
      const result = await analyzeField(content, selectedFile.type, fieldToAnalyze);

      setCategories(prev => prev.map(category => ({
        ...category,
        fields: category.fields.map(field => 
          field.id === fieldToAnalyze.id
            ? { 
                ...field, 
                value: result.value,
                reasoning: result.reasoning,
                isLoading: false
              }
            : field
        )
      })));
    } catch (error: any) {
      setError(error.message || 'Failed to analyze field');
      setCategories(prev => prev.map(category => ({
        ...category,
        fields: category.fields.map(field => 
          field.id === fieldToAnalyze.id
            ? { ...field, isLoading: false }
            : field
        )
      })));
    }
  };

  React.useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Content Metadata Extractor</h1>
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 gap-8">
        {/* Left Pane - File Upload and Preview */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <label 
            htmlFor="file-upload"
            className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
          >
            <div className="flex flex-col items-center space-y-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="font-medium text-gray-600">
                {selectedFile ? selectedFile.name : 'Drop files to upload or click'}
              </span>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*,text/*"
              onChange={handleFileUpload}
            />
          </label>

          {filePreview && (
            <div className="mt-6">
              <img 
                src={filePreview} 
                alt="Uploaded content preview"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Right Pane - Metadata Fields */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MetadataDisplay 
            categories={categories}
            onAnalyzeField={handleAnalyzeField}
            selectedFile={selectedFile}
          />
        </div>
      </div>
    </div>
  );
}

export default App;