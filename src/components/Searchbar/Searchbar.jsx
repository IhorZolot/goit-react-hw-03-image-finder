import React from 'react';
import {
  SearchbarStyled,
  SearchFormButtonStyled,
  SearchFormStyled,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSetSearch }) => {
  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.query.value;
    onSetSearch(query);
  };
  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <SearchFormButtonStyled type="submit">
          <span>Search</span>
        </SearchFormButtonStyled>
      </SearchFormStyled>
    </SearchbarStyled>
  );
};
