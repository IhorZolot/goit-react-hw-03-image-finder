import React from 'react';

export const ImageGallery = ({ images = [] }) => {
  console.log(images);
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} width={100} />
        </li>
      ))}
    </ul>
  );
};

// isModalOpen
// { isModalOpen && <Modal>  img src.landscape      </Modal>}
