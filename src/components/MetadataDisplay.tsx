import React from 'react';
import { ChevronDown, ChevronRight, Loader2, Play } from 'lucide-react';
import type { MetadataField, MetadataCategory } from '../types';

interface MetadataDisplayProps {
  categories: MetadataCategory[];
  onAnalyzeField: (field: MetadataField) => void;
  selectedFile: File | null;
}

export function MetadataDisplay({ categories, onAnalyzeField, selectedFile }: MetadataDisplayProps) {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(prev => prev === categoryName ? null : categoryName);
  };

  const handleRunAll = (category: MetadataCategory, e: React.MouseEvent) => {
    e.stopPropagation();
    category.fields.forEach(field => {
      if (!field.value && !field.isLoading) {
        onAnalyzeField(field);
      }
    });
  };

  const isCategoryLoading = (category: MetadataCategory) => {
    return category.fields.some(field => field.isLoading);
  };

  return (
    <div className="h-[calc(100vh-12rem)] overflow-y-auto">
      {categories.map(category => (
        <div key={category.name} className="border-b border-blue-100 last:border-b-0">
          <div className="px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors group">
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex-1 flex items-center justify-between text-left"
            >
              <span className="font-medium text-blue-900">{category.name}</span>
              <div className="flex items-center">
                {expandedCategory === category.name ? (
                  <ChevronDown className="h-5 w-5 text-blue-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-blue-500" />
                )}
              </div>
            </button>
            
            {expandedCategory === category.name && selectedFile && (
              <button
                onClick={(e) => handleRunAll(category, e)}
                className="ml-4 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
                disabled={isCategoryLoading(category)}
              >
                {isCategoryLoading(category) ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span>Run All</span>
              </button>
            )}
          </div>
          
          {expandedCategory === category.name && (
            <div className="divide-y divide-blue-100">
              {category.fields.map(field => (
                <div key={field.id} className="px-6 py-4 hover:bg-blue-50/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-blue-900">{field.field}</h3>
                    {selectedFile && !field.value && !field.isLoading && (
                      <button
                        onClick={() => onAnalyzeField(field)}
                        className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        Analyze
                      </button>
                    )}
                    {field.isLoading && (
                      <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
                    )}
                  </div>
                  
                  {field.value && (
                    <div className="space-y-2">
                      <p className="text-sm text-blue-900">{field.value}</p>
                      {field.reasoning && (
                        <p className="text-xs text-blue-600 italic">
                          Reasoning: {field.reasoning}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}