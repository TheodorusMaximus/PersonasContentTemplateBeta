export interface MetadataField {
  id: string;
  category: string;
  field: string;
  value: string | null;
  reasoning: string | null;
  isLoading?: boolean;
}

export interface MetadataCategory {
  name: string;
  fields: MetadataField[];
}

export interface ProcessingStatus {
  status: 'uploading' | 'processing' | 'complete' | 'error';
  message: string;
  progress: number;
}

export interface FileWithPreview extends File {
  preview?: string;
}