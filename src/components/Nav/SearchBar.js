import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
  return (
    <Form className="d-flex">
    <Form.Group controlId="Location">
    <Form.Label className="label-sm">Location</Form.Label>
    <Form.Control
      type="search"
      placeholder="Where"
      className="me-2"
      aria-label="Search"
    />
    </Form.Group>
   
    <Form.Group controlId="startDate">
    <Form.Label className="label-sm">Check In</Form.Label>
    <Form.Control
      type="Date"
      placeholder="Check In Date"
      name="startDate"
      className="me-2"
      aria-label="Search"
    />
    </Form.Group>
    
    <Form.Group controlId="endDate">
    <Form.Label className="label-sm">Check Out</Form.Label>
    <Form.Control
      type="Date"
      placeholder="Check Out Date"
      name="endDate"
      className="me-2"
      aria-label="Search"
    />
    </Form.Group>
   
    <Form.Group controlId="guestNumber">
    <Form.Label className="label-sm">Guests</Form.Label>
    <Form.Control
      type="number"
      placeholder="Guest Number"
      className="me-2"
      aria-label="Search"
    />
     </Form.Group>
   
    <Button variant="outline-danger" className="nav-btn">Search</Button>
  </Form>
  )
}

export default SearchBar