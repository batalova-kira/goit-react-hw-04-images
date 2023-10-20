import React from 'react';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

import { ModalImage } from './Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={openModal}
      />
      <ModalImage
        isOpenModal={isModalOpen}
        largeImg={image.largeImageURL}
        isCloseModal={closeModal}
        tags={image.tags}
      />
    </>
  );
};
