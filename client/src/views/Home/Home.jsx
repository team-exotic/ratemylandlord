import React, { useState } from 'react';

// import components
import NavBar from '../../components/Nav/Nav';
import Hero from '../../components/HeroSection/Hero';
import ResultsMap from '../../components/ResultsMap/ResultsMap';

const Home = () => {
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
