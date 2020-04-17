import React from 'react';

import NavBar from '../../components/Nav/Nav';
import HeroSearch from '../../components/HeroSearch/HeroSearch';

import './PropertyResult.scss';

// Receives the 'match' params from React router, which can be used to grab a property id
const PropertyResult = ({ match }) => {
  const getDetails = () => {
    fetch()
      .then((res) => res.json())
      .then()
      .catch((err) => window.alert('There was an error retrieving the results'));
  };

  return (
    <div className="super_container property-bg">
      <NavBar />

      <div className="property-result">
        <div
          className="parallax_background parallax-window property-background"
          //   className="property-background"
          data-parallax="scroll"
          //   data-image-src="images/properties.jpg"
          data-speed="0.8"
        ></div>
        <div className="property-result__container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content d-flex flex-row align-items-end justify-content-start">
                  <div className="home_title">Search results</div>
                  <div className="breadcrumbs ml-auto">
                    <ul>
                      <li>
                        <a href="index.htmo">Home</a>
                      </li>
                      <li>Search Results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSearch />

      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="intro_content d-flex flex-lg-row flex-column align-items-start justify-content-start">
                <div className="intro_title_container">
                  <div className="intro_title">Codesmith</div>
                  <div className="intro_tags">
                    <ul>
                      {/* <li>
                        <a href="#">Hottub</a>
                      </li> */}
                      <li>
                        <a href="#">Whiteboard Desks</a>
                      </li>
                      <li>
                        <a href="#">Floor-to-ceiling windows</a>
                      </li>
                      <li>
                        <a href="#">Nearby Scooters</a>
                      </li>
                      <li>
                        <a href="#">Lots of homeless peeps</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="intro_price_container ml-lg-auto d-flex flex-column align-items-start justify-content-center"> */}
            {/* <div>For Sale</div> */}
            {/* <div className="intro_price">Leave Rating</div>
            </div> */}
          </div>
        </div>
        <div className="intro_slider_container">
          <div className="owl-carousel owl-theme intro_slider">
            <div className="owl-item">
              <img src="http://localhost:3000/images/codesmith.png" alt="" />
            </div>

            {/* <div class="owl-item">
                            <img src="images/intro_1.jpg" alt="" />
                        </div>

                        <div class="owl-item">
                            <img src="images/intro_1.jpg" alt="" />
                        </div> */}
          </div>

          {/* <div class="intro_slider_nav_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="intro_slider_nav_content d-flex flex-row align-items-start justify-content-end">
                    <div class="intro_slider_nav intro_slider_prev">
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div class="intro_slider_nav intro_slider_next">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyResult;
