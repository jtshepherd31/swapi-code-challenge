import './People.css';
import { Link } from 'react-router-dom';
import personImg from '../images/person.png';


const People = ({ people }) => {
  return (
      <section className='people-section'>
        {
          people.map((person, i) => (
              <Link
                  key={ i }
                  className='people-card'
                  to={{ pathname: `/personDetails/${i}` }}
                  state={{ person }}>
                <img className='person-img' src={ personImg } />

                  <h2 className='people-text'>{ person.name }</h2>
              </Link>
          ))
        }
      </section>
  )
};

export default People;
