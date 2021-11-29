import axios from 'axios';

export const getSpeciesData = async(pageNumber) => {
  const response = await axios.get(`https://swapi.dev/api/species/?page=${pageNumber}`);
  const species = response.data.results;

  const speciesWithPeople = species.map(async(s) => {
    const people = await getPeopleData(s.people);
    return {...s, people: people}
  });


  return Promise.all(speciesWithPeople);
};

export const getPeopleData = (urlList) => {
  const people = urlList.map(async url => {
    const response = await axios.get(url);
    return response.data;
  });

  return Promise.all(people);
};

export const getFilmData = (urlList) => {
  const people = urlList.map(async url => {
    const response = await axios.get(url);
    return response.data
  });

  return Promise.all(people);
};

export const searchPeople = async(searchString) => {
  const response = await axios.get(`https://swapi.dev/api/people/?search=${searchString}`);
  return response.data.results;
};


