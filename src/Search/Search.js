import './Search.css';
import { useState } from 'react';

const Search = ({ searchForPerson }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchView = () => {
    setShowSearch(!showSearch);
  };

  return (
      <>
        {showSearch &&
          <input
              type='text'
              placeholder='Search'
              className='search-input'
              onKeyUp={(e) => searchForPerson(e)}/>
        }
        <button className='search-button' onClick={ toggleSearchView }></button>
      </>
  )
};

export default Search;
