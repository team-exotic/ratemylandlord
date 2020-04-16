import React from 'react';
import NavBar from '../../components/Nav/Nav';

import './PropertyResult.scss';

const PropertyResult = () => {
  return (
    <div className="super_container">
      <NavBar />

      <div className="home">
        <div
          className="parallax_background parallax-window property-background"
          //   className="property-background"
          data-parallax="scroll"
          //   data-image-src="images/properties.jpg"
          data-speed="0.8"
        ></div>
        <div className="home_container">
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
    </div>
  );
};

export default PropertyResult;
