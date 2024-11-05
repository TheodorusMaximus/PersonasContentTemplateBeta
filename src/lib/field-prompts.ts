export const fieldPrompts: Record<string, string> = {
  // Basic Descriptive Metadata
  title: `Analyze the content to determine its main title or heading. Consider the most prominent text or theme that summarizes the content's focus.
  Format your response as:
  Value: [Provide the title]
  Reasoning: [Explain why this title best represents the content]`,

  author: `Identify the creator(s) or contributors responsible for the content. Look for explicit author credits or signatures.
  Format your response as:
  Value: [List author(s)]
  Reasoning: [Explain how the authorship was determined]`,

  description: `Provide a brief summary of the content's main points and purpose. Focus on key themes and intended message.
  Format your response as:
  Value: [Provide description]
  Reasoning: [Explain how this description captures the essence of the content]`,

  keywords: `Analyze the content to identify significant terms or phrases that capture its main themes or topics, particularly those that would help in search optimization and categorization. Focus on words central to the message and that audiences might use to search for this topic. Provide up to 20 keywords, each no longer than 50 characters.
  Format your response as:
  Value: [List each keyword]
  Reasoning: [Describe why these keywords were chosen and how they reflect the content's topic and audience focus]`,

  language: `Determine the primary language in which the content is written, based on textual cues and standard language codes (e.g., 'English' or 'en'). Review for common language indicators such as vocabulary, syntax, and any explicit language tags.
  Format your response as:
  Value: [Provide the language name and code]
  Reasoning: [Explain why this language selection is appropriate based on the content's intended audience and regional relevance]`,

  // Categorization and Classification
  category: `Determine the general content type or category that best describes this piece. Consider standard content categories like blog post, white paper, case study, etc.
  Format your response as:
  Value: [State the category]
  Reasoning: [Explain why this category is most appropriate]`,

  subcategory: `Identify a more specific classification within the main category. Consider industry-specific or topic-specific subcategories.
  Format your response as:
  Value: [State the subcategory]
  Reasoning: [Explain why this subcategory adds valuable classification detail]`,

  topics: `Identify the main topics or themes that the content addresses. These should represent the primary focus areas or overarching subjects. Look for specific terms or recurring phrases that encapsulate core ideas. Provide up to 10 themes.
  Format your response as:
  Value: [List each theme]
  Reasoning: [Explain why each theme was chosen and how it contributes to understanding the content's main message]`,

  industry: `Determine the primary industry or vertical market this content is most relevant to. Consider business sectors, professional fields, or market segments.
  Format your response as:
  Value: [State the industry]
  Reasoning: [Explain why this industry alignment is most appropriate]`,

  // Audience and Engagement
  targetAudience: `Assess the content for clues about its intended readership or viewer demographics. Identify audience segments who would find the content relevant, such as professionals, hobbyists, or specific age groups.
  Format your response as:
  Value: [List target audience segments]
  Reasoning: [Describe why each audience segment is relevant]`,

  persona: `Evaluate which buyer or user personas this content would most appeal to. Consider common audience archetypes and their characteristics.
  Format your response as:
  Value: [List relevant personas]
  Reasoning: [Explain how the content aligns with each persona's interests and needs]`,

  contentGoals: `Identify the primary purpose or objective of this content. Consider goals like education, awareness, lead generation, or conversion.
  Format your response as:
  Value: [State the primary goals]
  Reasoning: [Explain how the content structure and elements support these goals]`,

  readingLevel: `Analyze the complexity of language and concepts to determine the appropriate reading level. Consider factors like sentence structure, vocabulary, and assumed knowledge.
  Format your response as:
  Value: [State reading level (Beginner, Intermediate, or Expert)]
  Reasoning: [Explain what aspects of the content indicate this reading level]`,

  // Visual Elements
  objectTags: `List the distinct objects identified within any images or videos associated with the content. Use clear and concise tags.
  Format your response as:
  Value: [List object tags]
  Reasoning: [Explain the significance of each identified object]`,

  sceneTags: `Identify the setting or scene depicted in any visual content, describing the environment. Use clear, descriptive terms.
  Format your response as:
  Value: [List scene tags]
  Reasoning: [Explain how these scene elements contribute to the content's context]`,

  colorPalette: `Analyze the dominant colors used within the visual content. Focus on primary and secondary colors.
  Format your response as:
  Value: [List color codes or names]
  Reasoning: [Explain how the color choices impact the visual message]`,

  lighting: `Assess the quality and type of lighting in any visual content. Consider natural vs. artificial, brightness, and mood.
  Format your response as:
  Value: [Describe lighting conditions]
  Reasoning: [Explain how lighting affects the visual impact]`,

  // Composition and Aesthetics
  cameraAngle: `Evaluate the perspective from which the content's visuals are captured. Consider standard camera angles and their impact.
  Format your response as:
  Value: [State camera angle]
  Reasoning: [Explain how this angle affects viewer perception]`,

  visualQuality: `Assess the overall resolution and clarity of the visual content. Consider factors like sharpness, detail, and technical quality.
  Format your response as:
  Value: [Rate quality as Low, Medium, or High]
  Reasoning: [Explain what aspects determine this quality rating]`,

  visualStyle: `Identify the overall artistic or stylistic approach of the visuals. Consider design movements and visual techniques.
  Format your response as:
  Value: [Describe visual style]
  Reasoning: [Explain how this style supports the content's message]`,

  symmetry: `Evaluate whether the visual composition follows symmetrical or asymmetrical balance. Consider layout and visual weight.
  Format your response as:
  Value: [State if symmetrical or asymmetrical]
  Reasoning: [Explain how this balance affects the composition]`,

  ruleOfThirds: `Determine if the visuals follow the 'rule of thirds' principle. Look for key elements positioned along grid lines or intersections.
  Format your response as:
  Value: [State True or False]
  Reasoning: [Explain how this principle is applied or ignored]`,

  visualComplexity: `Rate the level of detail and complexity in the visual content. Consider the number of elements and their relationships.
  Format your response as:
  Value: [Rate from 1-10]
  Reasoning: [Explain what factors contribute to this complexity rating]`,

  contrast: `Measure the level of contrast between light and dark areas within the visual. Consider readability and visual impact.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain how contrast affects the visual experience]`,

  colorTheory: `Examine the color relationships and their psychological impact. Consider color harmony and emotional associations.
  Format your response as:
  Value: [Describe color relationships]
  Reasoning: [Explain how color choices affect mood and message]`,

  // Contextual Scene
  location: `Use visual cues to infer the probable location type. Consider environmental and architectural elements.
  Format your response as:
  Value: [Describe location type]
  Reasoning: [Explain what visual elements suggest this location]`,

  timeOfDay: `Estimate the time of day depicted based on lighting, shadows, or other visible cues.
  Format your response as:
  Value: [State time of day]
  Reasoning: [Explain what indicates this time of day]`,

  season: `Identify the season depicted, if applicable, based on environmental cues like foliage, clothing, or weather elements.
  Format your response as:
  Value: [State season]
  Reasoning: [Explain what indicates this season]`,

  weather: `Assess any visible weather elements in visuals. Consider atmospheric conditions and their effect on the scene.
  Format your response as:
  Value: [Describe weather conditions]
  Reasoning: [Explain how weather impacts the scene]`,

  environment: `Define whether the visuals are indoor or outdoor and specify the nature of the setting.
  Format your response as:
  Value: [State environmental context]
  Reasoning: [Explain how this setting affects the content]`,

  // Semantic Content
  textInImage: `Extract and summarize any text visible within images using OCR principles. Consider both prominent and subtle text elements.
  Format your response as:
  Value: [List extracted text]
  Reasoning: [Explain the significance of this text]`,

  logoBrand: `Identify any logos or brand symbols visible within visuals. Consider both obvious and subtle brand presence.
  Format your response as:
  Value: [List identified brands]
  Reasoning: [Explain the relevance of brand presence]`,

  culturalSymbols: `Recognize cultural or symbolic elements present in visuals. Consider universal and culture-specific symbols.
  Format your response as:
  Value: [List cultural symbols]
  Reasoning: [Explain the cultural significance]`,

  typography: `Identify the typography styles used in any textual elements. Consider font families and their impact on readability.
  Format your response as:
  Value: [Describe typography]
  Reasoning: [Explain how typography choices affect the message]`,

  // Emotional and Sentiment
  facialExpressions: `Analyze any visible facial expressions to assess depicted emotions. Consider both individual and group expressions.
  Format your response as:
  Value: [Describe expressions]
  Reasoning: [Explain how these expressions contribute to mood]`,

  groupMood: `Evaluate the general mood from groups of individuals in visuals. Consider collective emotional states.
  Format your response as:
  Value: [Describe group mood]
  Reasoning: [Explain how group dynamics affect mood]`,

  mood: `Assess the overall mood and atmosphere evoked by the visual content. Consider emotional impact and tone.
  Format your response as:
  Value: [Describe mood]
  Reasoning: [Explain how various elements create this mood]`,

  emotionalContrast: `Determine if there is contrast between emotions conveyed by visuals and text. Look for intentional or unintentional disparities.
  Format your response as:
  Value: [State if contrasting or matching]
  Reasoning: [Explain the impact of emotional alignment]`,

  empathyScore: `Estimate the potential for the content to evoke empathy from the audience. Consider emotional triggers and relatability.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain what elements contribute to empathy]`,

  // Subject Interaction
  humanActivities: `Identify actions or activities shown in the visuals. Focus on clear, observable actions.
  Format your response as:
  Value: [List activities]
  Reasoning: [Explain how these activities add meaning]`,

  interactionType: `Describe the type of interaction visible among individuals. Consider social dynamics and relationships.
  Format your response as:
  Value: [Describe interaction type]
  Reasoning: [Explain how interactions affect the narrative]`,

  bodyLanguage: `Analyze nonverbal cues in body language. Consider posture, gestures, and their implications.
  Format your response as:
  Value: [Describe body language]
  Reasoning: [Explain how nonverbal cues affect meaning]`,

  proximity: `Evaluate the physical distance between individuals. Consider social and spatial relationships.
  Format your response as:
  Value: [Describe proximity]
  Reasoning: [Explain how spacing affects relationships]`,

  // Accessibility and Usability
  colorBlindness: `Evaluate color contrast and combinations for accessibility to color-blind users. Consider common color vision deficiencies.
  Format your response as:
  Value: [State True or False for compatibility]
  Reasoning: [Explain how color choices affect accessibility]`,

  readabilityScore: `Calculate the readability of text elements based on typography, contrast, and layout. Consider various viewing conditions.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain what factors influence readability]`,

  brightnessContrast: `Measure the brightness and contrast levels, particularly for accessibility in low-vision contexts.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain how these levels affect visibility]`,

  // Cultural and Demographics
  culturalRelevance: `Analyze how well the content aligns with specific cultural contexts. Consider cultural sensitivity and appropriateness.
  Format your response as:
  Value: [Rate as Low, Medium, or High]
  Reasoning: [Explain cultural alignment factors]`,

  ageGroup: `Identify the primary age group(s) this content is designed to appeal to. Consider language, themes, and presentation.
  Format your response as:
  Value: [List age groups]
  Reasoning: [Explain age-appropriate elements]`,

  subculture: `Identify any subcultures, values, or lifestyle cues represented within the content. Consider specific community references.
  Format your response as:
  Value: [List subculture indicators]
  Reasoning: [Explain subcultural relevance]`,

  religiousSymbols: `Detect religious or social symbols that may resonate with specific audiences. Consider both obvious and subtle references.
  Format your response as:
  Value: [List religious/social symbols]
  Reasoning: [Explain symbolic significance]`,

  // Content Lifecycle
  contentFreshness: `Determine whether the content appears new, evergreen, or outdated. Consider temporal references and context.
  Format your response as:
  Value: [State freshness level]
  Reasoning: [Explain temporal relevance]`,

  repurposingPotential: `Assess how suitable the content is for adaptation across different formats or platforms. Consider versatility and modularity.
  Format your response as:
  Value: [Rate as Low, Medium, or High]
  Reasoning: [Explain repurposing opportunities]`,

  // Ethical and Representation
  diversityScore: `Evaluate the representation of diversity in terms of age, gender, ethnicity, and other factors. Consider inclusivity and representation.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain diversity factors]`,

  inclusivityScore: `Rate how well the content addresses and includes diverse audiences. Consider accessibility and cultural sensitivity.
  Format your response as:
  Value: [Rate from 0-100]
  Reasoning: [Explain inclusivity elements]`,

  biasSensitivity: `Identify any potential bias or sensitivity issues in the content. Consider cultural, gender, and social biases.
  Format your response as:
  Value: [Describe bias concerns]
  Reasoning: [Explain sensitivity considerations]`,

  bodyPositivity: `Assess if the content promotes positive body image and inclusive representation. Consider visual and textual messages.
  Format your response as:
  Value: [State True or False]
  Reasoning: [Explain body image messaging]`,

  environmentalAwareness: `Identify if the content promotes eco-friendly practices or environmental consciousness. Consider sustainability themes.
  Format your response as:
  Value: [State True or False]
  Reasoning: [Explain environmental messaging]`,

  // Interactive Elements
  interactivityIndicators: `Identify interactive features within the content. Consider user engagement opportunities.
  Format your response as:
  Value: [List interactive elements]
  Reasoning: [Explain engagement potential]`,

  vrCompatibility: `Assess if the content is suitable for virtual reality experiences. Consider immersive potential.
  Format your response as:
  Value: [State True or False]
  Reasoning: [Explain VR suitability]`,

  arPotential: `Evaluate the content's potential for augmented reality applications. Consider spatial and interactive elements.
  Format your response as:
  Value: [State True or False]
  Reasoning: [Explain AR possibilities]`,

  dynamicResizing: `Specify whether the content is designed for responsive or fixed display across devices. Consider layout adaptability.
  Format your response as:
  Value: [State if Responsive or Fixed]
  Reasoning: [Explain display flexibility]`,

  interactiveLayers: `Assess the presence of interactive layering that enhances user engagement. Consider information hierarchy.
  Format your response as:
  Value: [Describe interactive layers]
  Reasoning: [Explain layering benefits]`
};