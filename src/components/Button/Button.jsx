import React from 'react';
import { ButtonLoadMoreStyled } from './Button.styled';

export const LoadMoreButton = ({ children, onNextPage }) => {
  return (
    <ButtonLoadMoreStyled onClick={onNextPage}>{children}</ButtonLoadMoreStyled>
  );
};
