import './PersonDetails.css';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getFilmData, getPeopleData } from "../SpeciesService";
import FilmCarousel from "./FilmCarousel";

const PersonDetails = () => {
  const location = useLocation();
  const { person } = location.state;
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(async() => {
    const vehicleData = await getPeopleData(person.vehicles);
    const starshipData = await getPeopleData(person.starships);
    const filmData = await getFilmData(person.films);

    setVehicles(vehicleData);
    setStarships(starshipData);
    setFilms(filmData);
    setLoading(false);
  }, [person]);

  return (
      <section className='person-details-container'>
        <Link to={{ pathname: `/` }} className='person-details-back-btn' />
        <header className='person-details-header'>
          <h1 className='person-details-name'>{ person.name }</h1>
        </header>
        <FilmCarousel films={ films } loading={ loading }/>
        <div className='person-details'>
          <ul>
            <li>
              <h5 className='person-detail-key'>Eye Color</h5>
              <p className='person-detail-value'>{ person.eye_color }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Gender</h5>
              <p className='person-detail-value'>{ person.gender }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Height</h5>
              <p className='person-detail-value'>{ person.height }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Mass</h5>
              <p className='person-detail-value'>{ person.mass }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Skin Color</h5>
              <p className='person-detail-value'>{ person.skin_color }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Hair Color</h5>
              <p className='person-detail-value'>{ person.hair_color }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Birth Year</h5>
              <p className='person-detail-value'>{ person.birth_year }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Number of Films</h5>
              <p className='person-detail-value'>{ person.films.length }</p>
            </li>
            <li>
              <h5 className='person-detail-key'>Star Ships</h5>
              { starships.length ?
                  starships.map((s, i) => <p key={ i } className='person-detail-value'>{ s.name }</p>) :
                  <p className='person-detail-value'>none</p>
              }
            </li>
            <li>
              <h5 className='person-detail-key'>vehicles</h5>
              { vehicles.length ?
                  vehicles.map((v, i) => <p key={ i } className='person-detail-value'>{ v.name }</p>) :
                  <p className='person-detail-value'>none</p>
              }
              </li>
          </ul>
        </div>
      </section>
  )
};

export default PersonDetails;
