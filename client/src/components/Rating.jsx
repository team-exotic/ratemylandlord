import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const Rating = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    return setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    console.log('this is e targ:', event.target.value);

    // const body = JSON.stringify({ e });
    // fetch('/rating', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //     Accept: 'Application/JSON'
    //   },
    //   body: body
    // })
    //   .then(() => {
    //     //if successful redirect to the home page
    //     history.push('/');
    //   })
    //   .catch((error) => {
    //     console.log('Username or Password does not exist!', error);
    //   });

    setShow(false);
  };

  return (
    <div className="Rating">
      <Button variant="primary" onClick={handleShow}>
        Submit a Rating
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Rate your Landlord : 1(Worst) - 5(Best)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="basicReview">
              <Form.Label>Timely Maintenance</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Appropriate Distance</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Respectful</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Communication</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Flexibility</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Transparency</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Organized</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Label>Professionalism</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Rating;
