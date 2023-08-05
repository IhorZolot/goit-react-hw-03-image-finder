import React from 'react';

export const LoadMoreButton = ({ children, onNextPage }) => {
  return <button onClick={onNextPage}>{children}</button>;
};
