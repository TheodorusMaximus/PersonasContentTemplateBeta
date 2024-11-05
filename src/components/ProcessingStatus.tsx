import React from 'react';
import type { ProcessingStatus } from '../types';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  status: ProcessingStatus;
}

export default function ProcessingStatus({ status }: ProcessingStatusProps) {
  const getStatusColor = () => {
    switch (status.status) {
      case 'complete': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${getStatusColor()}`}>
          {status.message}
        </span>
        {status.status === 'processing' && (
          <Loader2 className="animate-spin h-5 w-5 text-blue-500" />
        )}
      </div>
      {(status.status === 'uploading' || status.status === 'processing') && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${status.progress}%` }}
          />
        </div>
      )}
    </div>
  );
}