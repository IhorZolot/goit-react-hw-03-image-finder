import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLoadMoreStyled, ButtonContainer } from './Button.styled';

export const LoadMoreButton = ({ children, onNextPage }) => {
  return (
    <ButtonContainer>
      <ButtonLoadMoreStyled onClick={onNextPage}>
        {children}
      </ButtonLoadMoreStyled>
    </ButtonContainer>
  );
};

LoadMoreButton.propTypes = {
  children: PropTypes.node.isRequired,
  onNextPage: PropTypes.func.isRequired,
};
