import React, { useState } from 'react';

const HeroSearch = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="home_search_container">
            <div className="home_search_content">
              <form
                action="#"
                className="search_form d-flex flex-row align-items-start justfy-content-start"
                onSubmit={handleSubmit}
              >
                <div className="search_form_content d-flex flex-row align-items-start justfy-content-start flex-wrap">
                  <input
                    className="search_form_input"
                    placeholder="Enter an adress, city, landlord, or property manager"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* <div>
                    <select className="search_form_select">
                      <option disabled selected>
                        Bathrooms
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div> */}
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
