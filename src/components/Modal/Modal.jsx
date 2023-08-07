import React, { Component } from 'react';
import { ModalOverlayStyled, ModalWindowStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalOverlayStyled onClose={this.toggleModal}>
        <ModalWindowStyled>{this.props.children}</ModalWindowStyled>
      </ModalOverlayStyled>
    );
  }
}
