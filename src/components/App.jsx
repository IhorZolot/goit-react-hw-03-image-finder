import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImg } from '../Servise/Api';
import { LoadMoreButton } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    hits: [],
    q: '',
    page: 0,
    per_page: 3,
    isModalOpen: false,
    loading: false,
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
    this.setState(prevState => ({ page: prevState.q + prevState.per_page }));
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
    const { isModalOpen, hits, loading } = this.state;
    return (
      <div>
        <Searchbar onSetSearch={this.handelSetSearch} />
        {loading && !hits.length ? <Loader /> : <ImageGallery images={hits} />}
        <ImageGallery images={hits} />
        <LoadMoreButton onNextPage={this.loadNextImage}>
          Load more
        </LoadMoreButton>
        {/* {isModalOpen && <Modal>sgsfgs</Modal>} */}
        {/* <button onClick={this.toggleModal}>Button</button> */}
      </div>
    );
  }
}
