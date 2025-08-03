// Environment variable utility for Vite
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
export const isTest = import.meta.env.MODE === 'test';

// Fallback for process.env.NODE_ENV if needed
export const NODE_ENV = import.meta.env.MODE || 'development'; 