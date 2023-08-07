import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImg } from '../Servise/Api';
import { LoadMoreButton } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    hits: [],
    q: '',
    page: 1,
    per_page: 12,
    isModalOpen: false,
    loading: false,
    isButtonHidden: true,
    error: '',
  };

  async componentDidMount() {
    const { per_page, q } = this.state;
    try {
      this.setState({ loading: true });
      const { hits, total_result } = await fetchImg({ per_page, q });
      this.setState({ hits: hits, total_result });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }
  loadNextImage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { q, per_page, page } = this.state;
    if (prevState.q !== q) {
      this.setState({ hits: [] });
    }
    if (prevState.q !== q || prevState.page !== page) {
      const { hits } = await fetchImg({
        q,
        per_page,
        page: prevState.q !== q ? 1 : page,
      });

      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        isButtonHidden: false,
      }));
    }
  }
  handleSetSearch = q => {
    this.setState({ q });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { hits, loading, isButtonHidden, isModalOpen } = this.state;
    const isSearchResultsAvailable = hits.length > 0;
    return (
      <AppStyled>
        <Searchbar onSetSearch={this.handleSetSearch} />
        {loading && !hits.length ? (
          <Loader />
        ) : (
          <ImageGallery images={hits} toggleModal={this.toggleModal} />
        )}
        {isSearchResultsAvailable && !isButtonHidden && (
          <LoadMoreButton onNextPage={this.loadNextImage}>
            Load more
          </LoadMoreButton>
        )}
        {isModalOpen && <Modal onClose={this.toggleModal}></Modal>}
      </AppStyled>
    );
  }
}
