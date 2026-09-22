const providerKeys = [
    'OPENAI_API_KEY',
    'ANTHROPIC_API_KEY',
    'GEMINI_API_KEY',
    'GOOGLE_API_KEY',
];

export function hasApiKey(): boolean {
    return providerKeys.some((key) => Boolean(process.env[key]?.trim()));
}