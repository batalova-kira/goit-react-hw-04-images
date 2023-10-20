import React from 'react';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

import { Component } from 'react';
import { ModalImage } from './Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <ImageGalleryItemImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <ModalImage
          isOpenModal={isModalOpen}
          largeImg={image.largeImageURL}
          isCloseModal={this.closeModal}
          tags={image.tags}
        />
      </>
    );
  }
}
