import React from 'react';

export const Searchbar = ({ onSetSearch }) => {
  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.query.value;
    onSetSearch(query);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};
