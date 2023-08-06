import React from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images = [] }) => {
  console.log(images);
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

// isModalOpen
// { isModalOpen && <Modal>  img src.landscape      </Modal>}
