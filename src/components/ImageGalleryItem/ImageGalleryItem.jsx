import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} width={150} />
    </li>
  );
};

// {isModalOpen && <Modal>sgsfgs</Modal>}

// {isModalOpen && <Modal>  img src.landscape      </Modal>}
{
  /* {isModalOpen && (
        <Modal>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )} */
}
