
// JavaScript source code
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import React, { useState } from "react";
import Axios from "axios";


export function FormUpdateOne({ carList }) {
  //const [validated, setValidated] = useState(false);

  const [model, setModel] = useState();
  const [make, setMake] = useState();
  const [owner, setOwner] = useState();
  const [registration, setRegistration] = useState();
  const [address, setAddress] = useState();
  const [_id, setId] = useState();

  const handleSubmit = (event) => {
    const newCar = {
      model: model,
      make: make,
      owner: owner,
      registration: registration,
      address: address,
      _id: _id
    };

      console.log("Generated object: ", newCar);
      Axios.patch(("/cars/updateOne/" + newCar._id), newCar);
  };

  const handleSelect = (event) => {
    console.log("Selecteed : ", event.target.value);

    let selectedID = event.target.value;
    console.log(carList[selectedID].make);

    setMake(carList[selectedID].make);
    setModel(carList[selectedID].model);
    setOwner(carList[selectedID].owner);
    setRegistration(carList[selectedID].registration);
    setAddress(carList[selectedID].address);
    setId(carList[selectedID]._id);

    console.log("selected id : ", carList[selectedID]._id);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Model</Form.Label>
            <Form.Control
              required
              type="text"
              value={model}
              placeholder="Model"
              defaultValue="Model"
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Make</Form.Label>
            <Form.Control
              required
              type="text"
              value={make}
              placeholder="Make"
              defaultValue="Make"
              onChange={(e) => {
                setMake(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              required
              type="text"
              value={owner}
              placeholder="Owner"
              defaultValue="Owner"
              onChange={(e) => {
                setOwner(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Registration</Form.Label>
            <Form.Control
              required
              type="text"
              value={registration}
              placeholder="Registration"
              defaultValue="Registration"
              onChange={(e) => {
                setRegistration(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              value={address}
              placeholder="Address"
              defaultValue="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button onClick={handleSubmit} className="submitButton">
            Update car
          </Button>
        </Form.Row>
      </Form>

      <div>
        <br />
        <select onClick={handleSelect} id="cars">
          {carList.map((car, index) => {
            return (
              <option key={index} value={index}>
                {" "}
                {car.make} , {car.model} , {car.owner}, {car.registration}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
