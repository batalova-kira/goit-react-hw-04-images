import { HiOutlineSearch } from 'react-icons/hi';
import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchWrapper,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleNameChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <SearchWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <HiOutlineSearch size={22} />
          </SearchFormButton>
          <SearchFormInput
            value={searchValue}
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchWrapper>
    );
  }
}
