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
    loading: false,
    isModalOpen: false,
    isButtonHidden: true,
    currentImage: '',
    totalHits: 0,
    error: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const { per_page, q } = this.state;
    try {
      this.setState({ loading: true });
      const { hits, totalHits } = await fetchImg({ per_page, q });
      this.setState({ hits, totalHits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

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
      const { hits, totalHits } = await fetchImg({
        q,
        per_page,
        page: prevState.q !== q ? 1 : page,
      });

      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        totalHits,
      }));
    }
  }
  handleSetSearch = q => {
    this.setState({ q });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  handleSetCurrentImage = img => {
    this.setState({ currentImage: img, isModalOpen: true });
  };

  render() {
    const {
      hits,
      page,
      per_page,
      totalHits,
      loading,
      isModalOpen,
      currentImage,
      tags,
    } = this.state;

    return (
      <AppStyled>
        <Searchbar onSetSearch={this.handleSetSearch} />
        {(loading && !hits.length) || !hits.length ? (
          <Loader />
        ) : (
          <ImageGallery
            setCurrentImage={this.handleSetCurrentImage}
            isOpen={isModalOpen}
            images={hits}
            toggleModal={this.toggleModal}
          />
        )}
        {page !== Math.ceil(totalHits / per_page) && (
          <LoadMoreButton onNextPage={this.loadNextImage}>
            Load more
          </LoadMoreButton>
        )}
        {isModalOpen && currentImage && (
          <Modal onClose={this.toggleModal}>
            <img src={currentImage} alt={tags} />
          </Modal>
        )}
      </AppStyled>
    );
  }
}
