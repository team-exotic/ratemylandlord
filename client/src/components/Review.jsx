import React, { useState } from 'react';
import { Modal } from 'react-bootstrap/Modal';

const Review = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    return setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShow(false);
    // fetch post goes here
  };

  return (
    <div className="review">
      <Button variant="primary" onClick={handleShow}>
        Submit a Review
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Review Landlord</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* form goes here */}</Modal.Body>
        <Modal.ModalFooter>
          <Button variant="primary" onSubmit={handleSubmit}>
            Submit
          </Button>
        </Modal.ModalFooter>
      </Modal>
    </div>
  );
};

export default Review;
