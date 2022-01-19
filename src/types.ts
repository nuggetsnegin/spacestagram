import React from 'react';

export type Post = {
  copyright?: string;
  date: Date;
  explanation: string;
  title: string;
  url: string;
};

export type StyleSheet = {
  [key: string]: React.CSSProperties;
};
