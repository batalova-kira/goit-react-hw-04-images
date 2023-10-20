import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Layout } from './Layout';
import { fetchImages } from './api';
import { Error, Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    currentValue: '',
    page: 1,
    isLoading: false,
    error: false,
  };

  handleFormSubmit = newValue => {
    this.setState({ currentValue: newValue, page: 1, images: [] });
    if (newValue.trim() === '') {
      toast.error('Please fill out this field!');
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    const { currentValue, page } = this.state;
    if (prevState.currentValue !== currentValue || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: false });
        const newImage = await fetchImages(
          `${this.state.currentValue}`,
          this.state.page
        );
        this.setState(prev => ({
          images: [...prev.images, ...newImage],
        }));
        if (newImage.length === 0) {
          toast.error('Not found any picture!');
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onClickMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {error && <Error />}
        {!isLoading && images.length >= 12 && (
          <Button onClickMore={this.onClickMore} />
        )}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
