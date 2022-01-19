export const API_KEY = 'J6Y6LbaVsvVJuujdjbtEBsDOFXAiBgg0xgSArv7w' as const;

export const HEART_COLORS = {
  liked_background: '#364a60',
  unliked_background: '#ebebeb',
  stroke: '#364a60',
} as const;

export const getIsValidImageURL = (url: String) =>
  !!url.toLowerCase().includes('jpg');
