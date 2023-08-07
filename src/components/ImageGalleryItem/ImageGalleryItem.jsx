import React from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImageStyles,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageURL, tags, toggleModal }) => {
  const handleImageClick = () => {
    toggleModal();
  };
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImageStyles
        src={largeImageURL}
        alt={tags}
        onClick={handleImageClick}
      />
    </ImageGalleryItemStyled>
  );
};
