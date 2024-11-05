import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat';
import type { MetadataField } from '../types';
import { fieldPrompts } from './field-prompts';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error('OpenAI API key is required. Please add VITE_OPENAI_API_KEY to your .env file.');
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeField(
  content: ArrayBuffer,
  fileType: string,
  field: MetadataField
) {
  const isImage = fileType.startsWith('image/');
  let base64Image = '';
  
  if (isImage) {
    base64Image = arrayBufferToBase64(content);
  }

  // Get field-specific prompt or use default
  const fieldPrompt = fieldPrompts[field.id] || 
    `You are an expert content analyzer focusing on the "${field.field}" aspect of ${isImage ? 'images' : 'content'}. 
    Provide a concise but informative analysis with both a clear value and reasoning for your assessment.
    Format your response as:
    Value: [your analysis value]
    Reasoning: [your reasoning]`;

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: fieldPrompt
    },
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `Analyze this ${isImage ? 'image' : 'text'} and provide the ${field.field} value and reasoning for your assessment.`
        },
        ...(isImage ? [{
          type: 'image_url',
          image_url: {
            url: `data:${fileType};base64,${base64Image}`
          }
        }] : [])
      ]
    }
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      max_tokens: 1000,
      temperature: 0.3
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response received from OpenAI');
    }

    // Split response into value and reasoning
    const [valuePart, reasoningPart] = response.split('\nReasoning: ');
    const value = valuePart.replace('Value: ', '').trim();
    const reasoning = reasoningPart?.trim() || 'No reasoning provided';
    
    return { value, reasoning };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while analyzing content');
  }
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}