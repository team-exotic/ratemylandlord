import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      setShow: false,
      timely_maintenance: 1,
      appropriate_distance: 1,
      respectful: 1,
      communication: 1,
      flexibility: 1,
      transparency: 1,
      organized: 1,
      professionalism: 1
    };
  }
  // const [show, setShow] = useState(false);

  handleClose = () => {
    this.setState({ setShow: false });
  };
  handleShow = () => {
    this.setState({ setShow: true });
  };
  handleFormChange = (e) => {
    //const {name, value} = e.target;

    this.setState({
      timely_maintenance: e.target.value,
      appropriate_distance: e.target.value,
      respectful: e.target.value,
      communication: e.target.value,
      flexibility: e.target.value,
      transparency: e.target.value,
      organized: e.target.value,
      professionalism: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //debugger;
    console.log('this is state', this.state);
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

    this.handleClose();
  };
  render() {
    return (
      <div className="Rating">
        <Button variant="primary" onClick={this.handleShow}>
          Submit a Rating
        </Button>

        <Modal show={this.state.setShow} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Rate your Landlord : 1(Worst) - 5(Best)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="basicReview">
                <Form.Label>Timely Maintenance</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Appropriate Distance</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Respectful</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Communication</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Flexibility</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Transparency</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Organized</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Professionalism</Form.Label>
                <Form.Control as="select" onChange={this.handleFormChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Add a comment:</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Rating;
