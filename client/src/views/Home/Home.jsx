import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* //maybe insert here */}
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home_slider">
          <div className="owl-item">
            <div
              className="home_slider_background"
              // style={{ backgroundImage: require('../../images/home_slider_1.jpg') }}
              // style={{ backgroundImage: `url(${'/images/home_slider_1.png'})` }}
            />
            <div className="slide_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="slide_content">
                      <div className="home_subtitle">super offer</div>
                      <div className="home_title">Villa with sea view</div>
                      <div className="home_details">
                        <ul className="home_details_list d-flex flex-row align-items-center justify-content-start">
                          <li>
                            <div className="home_details_image">
                              {/* <img src="../../images/icon_1.png" alt="" /> */}
                              <img src={require('../../images/icon_1.png')} alt="" />
                            </div>
                            <span> 650 Ftsq</span>
                          </li>
                          <li>
                            <div className="home_details_image">
                              {/* <img src="images/icon_2.png" alt="" /> */}
                              <img src={require('../../images/icon_2.png')} alt="" />
                            </div>
                            <span> 3 Bedrooms</span>
                          </li>
                          <li>
                            <div className="home_details_image">
                              {/* <img src="images/icon_3.png" alt="" /> */}
                              <img src={require('../../images/icon_3.png')} alt="" />
                            </div>
                            <span> 2 Bathrooms</span>
                          </li>
                        </ul>
                      </div>
                      <div className="home_price">$ 1. 245 999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home_search_container">
              <div className="home_search_content">
                <form
                  action="#"
                  className="search_form d-flex flex-row align-items-start justfy-content-start"
                >
                  <div className="search_form_content d-flex flex-row align-items-start justfy-content-start flex-wrap">
                    <div>
                      <select className="search_form_select">
                        <option disabled selected>
                          For rent
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <select className="search_form_select">
                        <option disabled selected>
                          All types
                        </option>
                        <option>Type 1</option>
                        <option>Type 2</option>
                        <option>Type 3</option>
                        <option>Type 4</option>
                      </select>
                    </div>
                    <div>
                      <select className="search_form_select">
                        <option disabled selected>
                          City
                        </option>
                        <option>New York</option>
                        <option>Paris</option>
                        <option>Amsterdam</option>
                        <option>Rome</option>
                      </select>
                    </div>
                    <div>
                      <select className="search_form_select">
                        <option disabled selected>
                          Bedrooms
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div>
                      <select className="search_form_select">
                        <option disabled selected>
                          Bathrooms
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="search_form_button ml-auto">
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
