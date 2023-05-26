import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './MainNav.css'


const SearchBar = () => {

  const magnifier = `\u1F50D`;

  const [locationState, setLocation] = useState("");
  const [startDateState, setStartDate] = useState ("");
  const [endDateState, setEndDate] = useState("");
  const [guestNumberState, setGuestNumber] = useState(1);
  const [resultState, setResult] = useState("");

  const navigate = useNavigate();

  const onChangeHandler= (e, setValue) => {
    setValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //prepare search query object
    const searchQuery = {
      location: locationState,
      startDate: startDateState,
      endDate: endDateState,
      guestNumber: guestNumberState
    }
    try{
      let response = await fetch(`http://localhost:4000/listing/search?location=${searchQuery.location}&startDate=${searchQuery.startDate}&endDate=${searchQuery.endDate}&guestNumber=${guestNumberState}`)

      let searchData = await response.json();
      setResult(searchData)
      navigate('/listing/search' , {state: {resultState: searchData}})

      } catch (error) {
        console.log(error)
      }
    } 

  
  return (
    <div style={{ borderRadius:'2em', width:"65%", display:"flex", justifyContent:"end", boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"}}>
  <Form className="d-flex" onSubmit={handleSubmit}>
    <Form.Group controlId="Location">
    <Form.Label style={{ marginBottom: '0px' }} className="label-sm">Location</Form.Label>
    <Form.Control
      type="search"
      placeholder="Where"
      value = {locationState}
      className="me-2"
      onChange = {(e) => onChangeHandler(e,setLocation)}
      aria-label="Search"
    />
    </Form.Group>
   
    <Form.Group controlId="startDate">
    <Form.Label style={{ marginBottom: '0px' }} className="label-sm">Check In</Form.Label>
    <Form.Control
      type="Date"
      placeholder="Check In Date"
      name="startDate"
      className="me-2"
      value = {startDateState}
      onChange={(e) => onChangeHandler(e,setStartDate)}
      aria-label="Search"
    />
    </Form.Group>
    
    <Form.Group controlId="endDate">
    <Form.Label style={{ marginBottom: '0px' }} className="label-sm">Check Out</Form.Label>
    <Form.Control
      type="Date"
      placeholder="Check Out Date"
      name="endDate"
      className="me-2"
      value = {endDateState}
      onChange={(e) => onChangeHandler(e,setEndDate)}
      aria-label="Search"
    />
    </Form.Group>
   
    <Form.Group controlId="guestNumber">
    <Form.Label style={{ marginBottom: '0px' }} className="label-sm">Guests</Form.Label>
    <Form.Control
      type="number"
      min = "1"
      placeholder="Guest Number"
      className="me-2"
      aria-label="Search"
      value = {guestNumberState}
      onChange={(e) => onChangeHandler(e,setGuestNumber)}
    />
     </Form.Group>
   
    <Button style={{ border: '1px solid transparent' }} variant="outline-secondary" type='submit' className="nav-btn" >🔍</Button>
  </Form>
    </div>
  )
}

export default SearchBar