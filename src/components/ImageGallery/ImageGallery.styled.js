import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal>
          <img src={webformatURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};
