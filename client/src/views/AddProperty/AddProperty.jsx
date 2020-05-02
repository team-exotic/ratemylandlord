import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import NavBar from '../../components/Nav/Nav';

import './AddProperty.scss';
import '../../components/LoginSignup/LoginSignup.scss';

/**
 * NOTE TO SELF:
 * this form is basically just copy pasted from the LoginSignup. it still needs to be modified and the CSS is borked for some reason.
 */
const AddProperty = () => {
  const [landlordName, setLandlordName] = useState('');
  const [address, setAddress] = useState('');
  const [numRatings, setNumRatings] = useState({
    timely_maintenance: 1,
    appropriate_distance: 1,
    respectful: 1,
    communication: 1,
    flexibility: 1,
    transparency: 1,
    organized: 1,
    professionalism: 1
  });
  const [comment, setComment] = useState('');
  const [propertyId, setPropertyId] = useState(0);

  const listRatingData = [
    { id: 1, label: 'Timely Maintenance ', name: 'timely_maintenance' },
    { id: 2, label: 'Appropriate Distance ', name: 'appropriate_distance' },
    { id: 3, label: 'Respectful ', name: 'respectful' },
    { id: 4, label: 'Communication ', name: 'communication' },
    { id: 5, label: 'Flexibility ', name: 'flexibility' },
    { id: 6, label: 'Transparency ', name: 'transparency' },
    { id: 7, label: 'Organized ', name: 'organized' },
    { id: 8, label: 'Professionalism ', name: 'professionalism' }
  ];

  const addProperty = async () => {
    fetch('/property', {
      method: 'POST',
      body: JSON.stringify({
        name: landlordName,
        address
      })
    });
  };

  const getPropertyId = async () => {
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify({
        address
      })
    })
      .then((data) => data.json())
      .then((parsed) => {
        // setPropertyId(parsed);
        console.log(parsed);
      });
  };

  const addRatings = async () => {
    fetch('/property', {
      method: 'POST',
      body: JSON.stringify({
        timely_maintenance: numRatings.timely_maintenance,
        appropriate_distance: numRatings.appropriate_distance,
        respectful: numRatings.respectful,
        communication: numRatings.communication,
        flexibility: numRatings.flexibility,
        transparency: numRatings.transparency,
        organized: numRatings.organized,
        professionalism: numRatings.professionalism,
        property_id: propertyId
      })
    });
  };

  const addRatingComment = async () => {
    fetch('/property', {
      method: 'POST',
      body: JSON.stringify({
        property_id: propertyId,
        comment
      })
    });
  };

  const handleFormChange = (e) => {
    if (e.target.name === 'landlordName') {
      setLandlordName(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else if (e.target.name === 'comment') {
      setComment(e.target.value);
    } else {
      setNumRatings({
        ...numRatings,
        [e.target.name]: e.target.value
      });
    }
  };

  //  has to post a property and THEN add the rating for that property due to the structure of the PropertyController in /server
  const handleSubmit = async (event) => {
    event.preventDefault();

    await addProperty();
    await getPropertyId();
    await addRatings();
    await addRatingComment();
  };

  return (
    <>
      <NavBar />

      <div className="login">
        <div className="container-login100">
          <div className="wrap-login100 property-page">
            <form
              className="login100-form validate-form property-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-logo">
                <img src="../../images/milestones_1.png" alt="apartments" />
              </span>

              <span className="login100-form-title p-b-34 p-t-27">Add Property</span>

              <div
                className="wrap-input100 validate-input property-input__wrapper"
                data-validate="Enter username"
              >
                <label className="form-label" htmlFor="landlordName">
                  Landlord Name (optional)
                </label>
                <input
                  className="input100"
                  type="text"
                  name="landlordName"
                  placeholder="Enter landlord name"
                  value={landlordName}
                  onChange={handleFormChange}
                />
                {/* <FontAwesomeIcon className="focus-input100" color="white" icon={faUser} /> */}
              </div>

              <div
                className="wrap-input100 validate-input property-input__wrapper"
                data-validate="Enter password"
              >
                <label className="form-label" htmlFor="address">
                  Property Address
                </label>
                <input
                  className="input100 add-property__input"
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={address}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <Form.Group controlId="basicReview">
                {listRatingData.map((data) => (
                  <div key={data.id} className="rating-form">
                    <Form.Label>{data.label}: </Form.Label>
                    {/* <Form.Control onChange={handleFormChange}> */}
                    <Form.Check
                      inline
                      label="1"
                      value={1}
                      type="radio"
                      name={data.name}
                      onChange={handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="2"
                      value={2}
                      type="radio"
                      name={data.name}
                      onChange={handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="3"
                      value={3}
                      checked
                      type="radio"
                      name={data.name}
                      onChange={handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="4"
                      value={4}
                      type="radio"
                      name={data.name}
                      onChange={handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="5"
                      value={5}
                      type="radio"
                      name={data.name}
                      onChange={handleFormChange}
                    />
                    {/* </Form.Control> */}
                  </div>
                ))}
                <div
                  className="wrap-input100 validate-input property-input__wrapper"
                  data-validate="Enter username"
                >
                  <Form.Label>Add a written review:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    className="input100 add-property__review"
                    onChange={handleFormChange}
                  />
                </div>
              </Form.Group>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Add Property Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
