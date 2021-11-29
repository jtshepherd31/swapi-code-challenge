import People from '../People/People';
import './Home.css';
import {useEffect, useState} from "react";
import {getSpeciesData, searchPeople} from "../SpeciesService";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [speciesList, setSpeciesList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(async() => {
    setLoading(true);
    const speciesResponse = await getSpeciesData(pageNumber);
    setSpeciesList(speciesResponse);
    setLoading(false);
  }, [pageNumber]);

  const changePageNumber = (delta, boundary) => {
    if (pageNumber !== boundary) {
      setPageNumber(pageNumber + delta);
    }
  };

  const searchForPerson = async(e) => {
    if (!e.target.value && peopleList.length) {
      setErrorMessage('');
      setPeopleList([]);
      return;
    }

    const people = await searchPeople(e.target.value);

    if (e.target.value && !people.length) {
      setPeopleList([]);
      setErrorMessage(`No results found for '${e.target.value}'`);
    } else {
      setErrorMessage('');
      setPeopleList(people);
    }

    console.log(errorMessage)

  };

  return (
      <section >
        { loading ? <div className="loader"></div> : <Search searchForPerson={ searchForPerson }/> }
        <div className='species-container'>
          { errorMessage && <h2 className='error-message'>{ errorMessage }</h2> }
          {
            peopleList.length && !errorMessage && <People people={ peopleList } errorMessage={ errorMessage }/>
          }
          {
            !peopleList.length && !errorMessage && speciesList.map((species, i) => (
                <div key={i}>
                  <div>
                    <h3 className='species-name'>{ species.name }</h3>
                    <People people={ species.people }/>
                  </div>
                </div>
            ))
          }
        </div>
        { !loading &&
          <Pagination setPageNumber={changePageNumber} pageNumber={pageNumber}/>
        }

      </section>
  )
};

export default Home;
