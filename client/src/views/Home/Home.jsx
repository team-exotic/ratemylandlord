import React, { useEffect, useState } from 'react';
import Hero from '../../components/HeroSection/Hero';
import NavBar from '../../components/Nav/Nav';
import ResultsMap from '../../components/ResultsMap/ResultsMap';
import { useDispatch, useSelector } from 'react-redux';
import { verifyLogin } from '../../actions/userActions';

const Home = () => {
  //redux store is connected here
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);
  console.log('redux', { user });

  //react state is set here for results
  // initially our results will be empty
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(verifyLogin());
  });
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
      <NavBar user={user} />
      <Hero handleSearch={handleSearch} />
      <ResultsMap results={results} />
    </div>
  );
};
export default Home;
