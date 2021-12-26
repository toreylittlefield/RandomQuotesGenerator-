import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchPageDisplay from './SearchPageDisplay';
import { useMediaQuery } from 'react-responsive';

const SearchPage = () => {
  const [selectItem, setSelectItem] = useState({});
  const [loaded, setLoaded] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });

  const styles = {
    color: 'green',
  };
  console.log(selectItem);

  return (
    <div className="searchPageMainDiv">
      <SearchBar setSelectItem={setSelectItem} setLoaded={setLoaded} />
      <SearchPageDisplay selectItem={selectItem} loaded={loaded} />
    </div>
  );
};

export default SearchPage;
