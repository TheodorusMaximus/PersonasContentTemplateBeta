interface Config {
  openaiApiKey: string;
}

const config: Config = {
  openaiApiKey: import.meta.env.VITE_OPENAI_API_KEY,
};

export default config;