import React from 'react';

const SearchResults = () => {
  return (
    <div className="recent">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title">Recent Properties</div>
            <div className="section_subtitle">Search your dream home</div>
          </div>
        </div>
        <div className="row recent_row">
          <div className="col">
            <div className="recent_slider_container">
              <div className="owl-carousel owl-theme recent_slider">
                <div className="owl-item">
                  <div className="recent_item">
                    <div className="recent_item_inner">
                      <div className="recent_item_image">
                        <img src="images/property_1.jpg" alt="" />
                        <div className="tag_featured property_tag">
                          <a href="#">Featured</a>
                        </div>
                      </div>
                      <div className="recent_item_body text-center">
                        <div className="recent_item_location">Miami</div>
                        <div className="recent_item_title">
                          <a href="property.html">Sea view property</a>
                        </div>
                        <div className="recent_item_price">$ 1. 234 981</div>
                      </div>
                      <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_1.png" alt="" />
                          </div>
                          <span>650 Ftsq</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_2.png" alt="" />
                          </div>
                          <span>3 Bedrooms</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_3.png" alt="" />
                          </div>
                          <span>3 Bathrooms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="owl-item">
                  <div className="recent_item">
                    <div className="recent_item_inner">
                      <div className="recent_item_image">
                        <img src="images/property_2.jpg" alt="" />
                        <div className="tag_offer property_tag">
                          <a href="#">Offer</a>
                        </div>
                      </div>
                      <div className="recent_item_body text-center">
                        <div className="recent_item_location">Los Angeles</div>
                        <div className="recent_item_title">
                          <a href="property.html">2 Floor Town House</a>
                        </div>
                        <div className="recent_item_price">$ 1. 234 981</div>
                      </div>
                      <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_1.png" alt="" />
                          </div>
                          <span>650 Ftsq</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_2.png" alt="" />
                          </div>
                          <span>3 Bedrooms</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_3.png" alt="" />
                          </div>
                          <span>3 Bathrooms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="owl-item">
                  <div className="recent_item">
                    <div className="recent_item_inner">
                      <div className="recent_item_image">
                        <img src="images/property_3.jpg" alt="" />
                        <div className="tag_featured property_tag">
                          <a href="#">Featured</a>
                        </div>
                      </div>
                      <div className="recent_item_body text-center">
                        <div className="recent_item_location">Florida</div>
                        <div className="recent_item_title">
                          <a href="property.html">Vacation Home</a>
                        </div>
                        <div className="recent_item_price">$ 1. 234 981</div>
                      </div>
                      <div className="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_1.png" alt="" />
                          </div>
                          <span>650 Ftsq</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_2.png" alt="" />
                          </div>
                          <span>3 Bedrooms</span>
                        </div>
                        <div>
                          <div className="recent_icon">
                            <img src="images/icon_3.png" alt="" />
                          </div>
                          <span>3 Bathrooms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recent_slider_nav_container d-flex flex-row align-items-start justify-content-start">
                <div className="recent_slider_nav recent_slider_prev">
                  <i className="fa fa-chevron-left" aria-hidden="true" />
                </div>
                <div className="recent_slider_nav recent_slider_next">
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="button recent_button">
              <a href="#">see more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
