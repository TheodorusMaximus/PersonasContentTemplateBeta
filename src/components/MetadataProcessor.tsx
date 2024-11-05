import React, { useEffect, useState } from 'react';
import type { FileWithPreview, ProcessingStatus, ExtractedMetadata } from '../types';
import { extractMetadata } from '../lib/metadata';

interface MetadataProcessorProps {
  files: FileWithPreview[];
  onStatusChange: (status: ProcessingStatus) => void;
  onMetadataExtracted: (metadata: ExtractedMetadata) => void;
}

export default function MetadataProcessor({
  files,
  onStatusChange,
  onMetadataExtracted,
}: MetadataProcessorProps) {
  const [currentFile, setCurrentFile] = useState<FileWithPreview | null>(null);

  useEffect(() => {
    if (files.length > 0 && files[0] !== currentFile) {
      setCurrentFile(files[0]);
      processFile(files[0]);
    }
  }, [files]);

  const processFile = async (file: FileWithPreview) => {
    try {
      onStatusChange({
        status: 'processing',
        message: 'Reading file content...',
        progress: 25,
      });

      const buffer = await file.arrayBuffer();

      onStatusChange({
        status: 'processing',
        message: 'Analyzing content...',
        progress: 50,
      });

      const metadata = await extractMetadata(buffer, file.type);

      onStatusChange({
        status: 'complete',
        message: 'Analysis complete',
        progress: 100,
      });

      onMetadataExtracted(metadata);
    } catch (error) {
      console.error('Error processing file:', error);
      onStatusChange({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to process file',
        progress: 0,
      });
    }
  };

  return null;
}