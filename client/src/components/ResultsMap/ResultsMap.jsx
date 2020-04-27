import React, { useState } from 'react';

import './ResultsMap.scss';
import SearchResultItem from '../SearchResultItem/searchResultItem';

const ResultsMap = ({ results }) => {
  const [propertyId, setPropertyId] = useState(1);

  return (
    <section className="search-box">
      <h2 className="text-center">Search Results</h2>
      <div className="container-fluid">
        <div className="row">
          {/* slim scroll div should be here??? */}
          <div className="slim-scroll">
            <div className="col-md-12 listing-block">
              {/* <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem /> */}
              {results.map((property) => {
                return <SearchResultItem property={property} key={property.id} />;
              })}
              ;
            </div>
          </div>
          <div className="col-md-7 map-box mx-0 px-0">
            <iframe
              title="map"
              width="100%"
              height="495"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsMap;
