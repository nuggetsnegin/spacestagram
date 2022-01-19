export const API_KEY = 'J6Y6LbaVsvVJuujdjbtEBsDOFXAiBgg0xgSArv7w' as const;

export const COLORS = {
  heart_liked_bg: '#de3535',
  heart_unliked_bg: '#fff5f8',
  heart_like_stroke: '#a13333',
  heart_unliked_stroke: '#171717',
} as const;

export const getIsValidImageURL = (url: String) =>
  !!url.toLowerCase().includes('jpg');
