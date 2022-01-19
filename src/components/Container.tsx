import React from 'react';
import { Post } from '../types';
import Card from './Card';
import LoadingIndicator from './LoadingIndicator';

type Props = {
  isLoading: boolean;
  data: Post[];
};

function Container({ isLoading, data }: Props) {
  return (
    <main>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        data.map((item) => (
          <Card
            title={item.title}
            url={item.url}
            explanation={item.explanation}
            date={item.date}
            copyright={item.copyright}
            key={JSON.stringify(item)}
          />
        ))
      )}
    </main>
  );
}

export default Container;
