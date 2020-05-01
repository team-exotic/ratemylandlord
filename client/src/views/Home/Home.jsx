import React, { useState } from 'react';
import Hero from '../../components/HeroSection/Hero';
import NavBar from '../../components/Nav/Nav';
import ResultsMap from '../../components/ResultsMap/ResultsMap';

const Home = () => {
  //redux store is connected here

  //react state is set here for results
  // initially our results will be empty
  const [results, setResults] = useState([]);

  // function that will be drilled down to the HeroSearch component
  const handleSearch = (address) => {
    const body = JSON.stringify({ address });
    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Accept: 'Application/JSON'
      },
      body: body
    })
      .then((res) => res.json())
      .then((parsed) => {
        // pushed the array of results into our state
        setResults(parsed);
        // console.log(results);
      });
  };

  return (
    <div className="super_container">
      <NavBar />
      <Hero handleSearch={handleSearch} />
      <ResultsMap results={results} />
    </div>
  );
};
export default Home;
