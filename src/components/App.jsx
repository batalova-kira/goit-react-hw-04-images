import toast, { Toaster } from 'react-hot-toast';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Layout } from './Layout';
import { fetchImages } from './api';
import { Error, Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = newValue => {
    setCurrentValue(newValue);
    setPage(1);
    setImages([]);

    if (newValue.trim() === '') {
      toast.error('Please fill out this field!');
    }
  };

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);
        const newImage = await fetchImages(`${currentValue}`, page);
        setImages(prev => [...prev, ...newImage]);
        if (newImage.length === 0) {
          toast.error('Not found any picture!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [currentValue, page]);

  const onClickMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Layout>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && images.length >= 12 && (
        <Button onClickMore={onClickMore} />
      )}
      <Toaster position="top-right" />
    </Layout>
  );
};
