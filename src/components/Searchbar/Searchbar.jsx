import { HiOutlineSearch } from 'react-icons/hi';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchWrapper,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleNameChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
    reset();
  };

  const reset = () => {
    setSearchValue('');
  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
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
          onChange={handleNameChange}
        />
      </SearchForm>
    </SearchWrapper>
  );
};
