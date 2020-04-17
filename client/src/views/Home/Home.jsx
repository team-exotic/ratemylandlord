import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Hero from '../../components/HeroSection/Hero';
import NavBar from '../../components/Nav/Nav';
import { useDispatch, useSelector, connect } from 'react-redux';
import { verifyLogin } from '../../actions/userActions';

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log('redux', user);
  // const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  //   isLoggedIn
  // });
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(verifyLogin(user));
    }

    // const mapDispatchToProps = (dispatch) => ({});
    // const { isLoggedIn } = this.props;
    //   if (!isLoggedIn) {
    //     return <></>;
    //   }
  });

  return (
    <div className="super_container">
      <NavBar user={user} />
      <Hero />
    </div>
  );
};

export default Home;
