import { createContext } from 'react';

export const Context = createContext({
  movies: [],
  searchTxt: '',
  handleWatched: () => {},
  handleSearch: () => {},
  searchedData: [],
  setSearchedData: () => {},
  searchDBTxt: '',
  handleSearchDB: () => {},
});
