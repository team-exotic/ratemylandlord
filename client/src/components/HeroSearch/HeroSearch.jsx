import React from 'react';

const HeroSearch = () => {
  return (
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
  );
};

export default HeroSearch;
