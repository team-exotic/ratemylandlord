import React from 'react';

// import components
import NavBar from '../../components/Nav/Nav';
import Hero from '../../components/HeroSection/Hero';
import ResultsMap from '../../components/ResultsMap/ResultsMap';

const Home = () => {
  return (
    <div className="super_container">
      <NavBar />
      <Hero />
      <ResultsMap />
    </div>
  );
};

export default Home;
