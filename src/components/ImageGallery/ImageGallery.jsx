import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryItem, ImageGalleryWrapper } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      {images.map(image => (
        <GalleryItem key={image.id}>
          <ImageGalleryItem image={image} />
        </GalleryItem>
      ))}
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
