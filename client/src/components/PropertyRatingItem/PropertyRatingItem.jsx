import React from 'react';

import './PropertyRatingItem.scss';

const PropertyRatingItem = ({ rating }) => {
  return (
    // <div className="list-group-item active">
    //   <h4 className="list-group-item-heading">Bootstrap</h4>
    //   <p className="list-group-item-text">
    //     Bootstrap is a free and open-source front-end web framework for designing websites
    //     and web applications,...
    //   </p>
    // </div>
    <div className="rating-container">
      {/* this div contains the overall rating as well as a thumbs up / down options so other people can judge the review */}
      <div className="rating-container__left">
        <h4 className="rating-heading">Rating</h4>
        <p className="rating-number">{rating.overallRating}</p>
      </div>
      {/* this div contains the comment, when it was posted, relevant images(?) */}
      <div className="rating-container__right">
        <span>Respectfulness: {rating.res}</span>
        <span>Communication: {rating.comm}</span>
        <span>Flexibility: {rating.flex}</span>
        <span>Transparency: {rating.trans}</span>
        <p className="rating-comment">{rating.comment}</p>
      </div>
    </div>
    //   <div className="media">
    //     {/* <div className="fav-box">
    //     <i className="fa fa-heart-o" aria-hidden="true" />
    //   </div> */}

    //     <div className="media-body pl-3">
    //       <div className="price">
    //         {/* make this the address */}
    //         {/* <Link to="/property-result"> */}
    //         {rating.address}
    //         {/* </Link> */}
    //       </div>
    //       <div className="stats">
    //         <span>
    //           {/* make this the name */}
    //           <i className="fa fa-arrows-alt" />
    //           {rating.name}
    //         </span>
    //         {/* <span>
    //             <i className="fa fa-bath" />2 Beadrooms
    //           </span> */}
    //       </div>
    //       {/* <div className="address">4062 Walnut Hill Drive Cincinnati</div> */}
    //     </div>
    //   </div>
  );
};

export default PropertyRatingItem;
