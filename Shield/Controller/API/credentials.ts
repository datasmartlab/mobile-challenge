import md5 from 'md5';

export const ts = Math.floor(new Date().getTime() / 1000);
export const apiKey = process.env.EXPO_PUBLIC_API_KEY || '';
export const privateKey = process.env.EXPO_PUBLIC_API_PRIVATE_KEY || '';
export const hash = md5(ts + privateKey + apiKey);