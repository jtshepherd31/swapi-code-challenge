import { useState } from 'react';
import './FilmCarousel.css';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import Search from "../Search/Search";

const FilmCarousel = ({ films, loading }) => {
  const [filmIndex, setFilmIndex] = useState(0);

  const changeFilm = (delta) => {
    const max = films.length - 1;

    if (filmIndex === max && delta === 1) {
      setFilmIndex(0);
      return;
    }

    if (filmIndex === 0 && delta === -1) {
      setFilmIndex(max);
      return;
    }

    setFilmIndex(filmIndex + delta);
  };

  return (
      <div className='person-details-poster-container'>
        { films.length && films.length > 1 &&
          <button className='carousel-buttons' onClick={() => changeFilm(-1)}>
            <img src={ leftArrow } />
          </button>
        }
        { !loading ?
          <img
              className='person-details-poster'
              src={require(
                  `../images/posters/episode-${films[filmIndex].episode_id}.jpg`).default}/>
            : <div className="loader"></div>
        }
        { films.length && films.length > 1 &&
          <button className='carousel-buttons' onClick={() => changeFilm(1)}>
            <img src={ rightArrow } />
          </button>
        }
      </div>
  );
};

export default FilmCarousel;
