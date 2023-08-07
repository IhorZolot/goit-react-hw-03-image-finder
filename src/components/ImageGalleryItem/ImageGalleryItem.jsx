import React from 'react';
import PropTypes from 'prop-types';

import {
  GalleryItemStyled,
  GalleryItemImageStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageURL, tags, setCurrentImage }) => {
  return (
    <GalleryItemStyled>
      <GalleryItemImageStyled
        src={largeImageURL}
        alt={tags}
        onClick={() => setCurrentImage(largeImageURL)}
      />
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};
