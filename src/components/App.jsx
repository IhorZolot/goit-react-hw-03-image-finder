import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Modal } from './Modal/Modal';
import { fetchImg } from '../Servise/Api';
import { LoadMoreButton } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    hits: [],
    q: '',
    page: 1,
    per_page: 12,
    isModalOpen: false,
    error: '',
  };

  async componentDidMount() {
    const { per_page, q } = this.state;
    try {
      const { hits, total_result } = await fetchImg({ per_page, q });
      this.setState({ hits: hits, total_result });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  loadNextImage = () => {
    this.setState(prevState => ({ page: prevState.page + prevState.per_page }));
  };

  async componentDidUpdate(_, prevState) {
    const { q, per_page } = this.state;
    if (prevState.q !== q) {
      const { hits } = await fetchImg({ q, per_page });
      this.setState(prevState => ({ hits: [...prevState.hits, ...hits] }));
    }
  }
  handelSetSearch = q => {
    console.log(q);
    this.setState({ q });
  };
  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen, hits } = this.state;
    return (
      <div>
        <Searchbar onSetSearch={this.handelSetSearch} />
        <ImageGallery images={hits} />
        <LoadMoreButton onNextPage={this.loadNextImage}>
          Load more{' '}
        </LoadMoreButton>
        {isModalOpen && <Modal>sgsfgs</Modal>}
        {/* <button onClick={this.toggleModal}>Button</button> */}
      </div>
    );
  }
}
