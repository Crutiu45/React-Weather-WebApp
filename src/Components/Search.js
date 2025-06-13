import '../styles/components/Search.scss';
import { searchPlaces } from '../api';
import { useContext, useState } from 'react';
import WeatherContext from '../context/Weather.context';

function Search() {
  const {
    setPlace,
    recentSearches,
    setRecentSearches
  } = useContext(WeatherContext);

  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  async function onSearch(e) {
    const value = e.target.value;
    setText(value);
    if (value.trim() === '') {
      setSearchResults([]);
      setOpenSearchResults(false);
      return;
    }
    const data = await searchPlaces(value);
    setSearchResults(data);
    setOpenSearchResults(data.length > 0);
  }

  const changePlace = (place) => {
    setPlace(place);
    setText('');
    setOpenSearchResults(false);
    // Add to recentSearches if not already included
    setRecentSearches(prev => {
      const exists = prev.find(p => p.place_id === place.place_id);
      if (exists) return prev;
      return [place, ...prev.slice(0, 4)];
    });
  };

  const deleteRecent = (id) => {
    setRecentSearches(prev => prev.filter(p => p.place_id !== id));
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <i className='bi bi-search'></i>
      </div>
      <div className="search-input">
        <input
          type="text"
          name="search-city"
          placeholder="Search city ..."
          value={text}
          onChange={onSearch}
        />
      </div>

      {/* Search Results Dropdown */}
      {openSearchResults && (
        <div className="search-results">
          <div className="results-container">
            {searchResults.map((place) => (
              <div
                className="result"
                key={place.place_id}
                onClick={() => changePlace(place)}
              >
                {place.name}, {place.adm_area1}, {place.country}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <div className="recent-header">
            <span>Recent Searches</span>
            <button
              className="clear-all"
              onClick={() => setRecentSearches([])}
            >
              Clear All
            </button>
          </div>
          <div className="recent-list">
            {recentSearches.map((place) => (
              <div className="recent-item" key={place.place_id}>
                <span onClick={() => changePlace(place)}>
                  {place.name}, {place.adm_area1}, {place.country}
                </span>
                <button
                  className="delete-recent"
                  onClick={() => deleteRecent(place.place_id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
