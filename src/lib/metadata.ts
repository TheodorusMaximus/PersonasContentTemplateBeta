import { analyzeContent } from './openai';
import type { ExtractedMetadata } from '../types';

export async function extractMetadata(
  content: ArrayBuffer,
  fileType: string
): Promise<ExtractedMetadata> {
  if (!content || content.byteLength === 0) {
    throw new Error('Invalid file content');
  }

  if (!fileType) {
    throw new Error('File type is required');
  }

  try {
    return await analyzeContent(content, fileType);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Metadata extraction failed: ${error.message}`);
    }
    throw new Error('Failed to extract metadata');
  }
}