import React from 'react';
import HeroSearch from '../HeroSearch/HeroSearch';

const Hero = () => {
  return (
    <main className="home">
      {/* used to contain the title */}
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home_slider">
          <div className="owl-item">
            <div className="home_slider_background" />
            <div className="slide_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slide_content">
                      <div className="home_subtitle">
                        The #1 resource for reviewing rental property landlords
                      </div>
                      <div className="home_title">Rate My Landlord</div>
                      <div className="home_details">
                        <ul className="home_details_list d-flex flex-row align-items-center justify-content-start">
                          <li>
                            <div className="home_details_image">
                              {/* <img src="../../images/icon_1.png" alt="" /> */}
                              <img src={require('../../images/icon_1.png')} alt="" />
                            </div>
                            <span> Search</span>
                          </li>
                          <li>
                            <div className="home_details_image">
                              {/* <img src="images/icon_2.png" alt="" /> */}
                              <img src={require('../../images/icon_2.png')} alt="" />
                            </div>
                            <span> Review</span>
                          </li>
                          <li>
                            <div className="home_details_image">
                              {/* <img src="images/icon_3.png" alt="" /> */}
                              <img src={require('../../images/icon_3.png')} alt="" />
                            </div>
                            <span> Anonymously</span>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="home_price">$ 1. 245 999</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSearch />
    </main>
  );
};

export default Hero;
