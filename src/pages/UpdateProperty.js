import React, {useContext, useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Autocomplete from '../components/NewListing/Autocomplete';
import { AuthContext } from '../context/auth-context';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProperty = () => {
  const [titleState, setTitleState] = useState("");
  const [priceState, setPriceState] = useState("");
  const [propertyState, setPropertyState] = useState("");
  const [amenitiesState, setAmenitiesState] = useState([]);
  const [privacyState, setPrivacyState] = useState("");
  const [guestState, setGuestState] = useState("");
  const [roomState, setRoomState] = useState("");
  const [bedState, setBedState] = useState("");
  const [bathroomState, setBathroomState] = useState("");
  const [addressState, setAddressState] = useState("");
  const [imgState, setImgState] = useState(['','','','','']);
  const {id} = useParams();
  const navigate = useNavigate();

  //authentication
  const auth = useContext(AuthContext);
  
  //useEffect

  useEffect(()=>{
    const fetchListing = async() => {
      try {
        const responseData = await fetch (`http://localhost:4000/listing/${id}`);
        const listingData = await responseData.json();
        console.log("🥲",listingData);

        const {title,price,address,types,images,amenities,share,guestNumber,bedroomNumber,bedNumber,bathroomNumber} = listingData.property
        //console.log("title",title)
        setTitleState(title)
        setPriceState(price);
        setPropertyState(types);
        setAmenitiesState(amenities);
        setPrivacyState(share);
        setGuestState(guestNumber);
        setRoomState(bedroomNumber);
        setBedState(bedNumber);
        setBathroomState(bathroomNumber);
        setAddressState(address);
        setImgState(images);

        //console.log(setTitleState)
      } catch(error) {
        console.log(error)
      }
    }
    fetchListing();
  }, [id]);

  //states handler
  const onChangeHandler = (e,setValue) => {
    setValue(e.target.value);
  }

  const handleAmenitiesChange = (e) => {
    const {value, checked} = e.target;
    if(checked) {
      setAmenitiesState((prevAmenities) => [...prevAmenities, value]);
    } else {
      setAmenitiesState((prevAmenities) => prevAmenities.filter((amenity) => amenity !== value))
    }
  }
  const handleImgChange = (e, index) => {
    const newImgUrls = [...imgState];
    newImgUrls[index] = e.target.value;
    setImgState(newImgUrls);
  }
 
  const handleSubmit = async (event) => {
      event.preventDefault();
      const newListing = {
        title: titleState,
        images: imgState.filter((url)=>url.trim()!==""),
        types: propertyState,
        price: priceState,
        share: privacyState,
        amenities: amenitiesState,
        address: addressState,
        guestNumber: guestState,
        bedroomNumber: roomState,
        bedNumber: bedState,
        bathroomNumber: bathroomState,
      }
     console.log('new listing',newListing);
 /////////////////////////////////////////////////////fetch///////////////////////////////////////////////////////// 
    try{   
     const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
     };

     const responseData = await fetch(
      `http://localhost:4000/listing/${id}`, options
      )
      const newListingObj = await responseData.json();
      navigate(`/listing/${id}`);
      console.log(newListingObj)

    } catch (error){
      console.log(error)
     }
 
  };

  const onDeleteHandler = async (event) => {
    event.preventDefault();
   // console.log("Delete review with ", reviewData._id)

    const options = {
        method: "DELETE",
    };

    const responseData = await fetch(`http://localhost:4000/listing/${id}`, options);
    const response = await responseData.json();
    console.log(response)
    navigate('/')
}

  return (
    <Container>
      {/* just to move form down */}
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Title</Form.Label>
          <Form.Control 
            type="text" 
            value ={titleState} 
            placeholder="Amazing Tower View Apartment" 
            onChange={(e) => onChangeHandler(e, setTitleState)}
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Address</Form.Label>
          <Autocomplete setAddress={setAddressState} address={addressState} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price Per Night</Form.Label>
          <Form.Control 
            type="number" 
            placeholder={priceState} 
            value ={priceState} 
            onChange={(e) => onChangeHandler(e, setPriceState)}
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Property Type</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="Apartment"
            value ={propertyState}
            onChange={(e) => onChangeHandler(e, setPropertyState)}
            required>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Camper">Camper</option>
            <option value="Wedding">Wedding Vendor</option>
            <option value="Treehouse">Treehouse</option>
            <option value="Cabin">Cabin</option>
            <option value="Castle">Castle</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Amenities</Form.Label>
          <Form.Check type="checkbox" value="WiFi" label="WiFi" onChange={handleAmenitiesChange} checked={amenitiesState.includes("WiFi")}/>
          <Form.Check type="checkbox" value="Free-parking" label="Free Parking" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Free-parking")}/>
          <Form.Check type="checkbox" value="Paid-parking" label="Paid Parking" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Paid-parking")}/>
          <Form.Check type="checkbox" value="Kitchen" label="Kitchen" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Kitchen")}/>
          <Form.Check type="checkbox" value="Pool" label="Pool" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Pool")}/>
          <Form.Check type="checkbox" value="TV" label="TV" onChange={handleAmenitiesChange} checked={amenitiesState.includes("TV")}/>
          <Form.Check type="checkbox" value="Laundry" label="Laundry" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Laundry")}/>
          <Form.Check type="checkbox" value="Air-conditioning" label="Air Conditioning" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Air-conditioning")}/>
          <Form.Check type="checkbox" value="Work-space" label="Work-Space" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Work-space")}/>
          <Form.Check type="checkbox" value="Patio" label="Patio" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Patio")}/>
          <Form.Check type="checkbox" value="Grill" label="Grill" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Grill")}/>
          <Form.Check type="checkbox" value="Gym" label="Gym" onChange={handleAmenitiesChange} checked={amenitiesState.includes("Gym")}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Privacy</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="single-room"
            value ={privacyState}
            onChange={(e) => onChangeHandler(e, setPrivacyState)}
            required
            >
            <option value="entire-house">Entire Place</option>
            <option value="single-room">Single Room</option>
            <option value="share-room">Share Room</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Guest Number</Form.Label>
          <Form.Control 
          type="number"
          placeholder="2" 
          value ={guestState}
          onChange={(e) => onChangeHandler(e, setGuestState)}
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Room Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="2" 
          value ={roomState}
          onChange={(e) => onChangeHandler(e, setRoomState)}
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Bed Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="2"
          value ={bedState}
          onChange={(e) => onChangeHandler(e, setBedState)} 
          required/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Label>Bathroom Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="2"
          value ={bathroomState}
          onChange={(e) => onChangeHandler(e, setBathroomState)} 
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Images</Form.Label>
          <Form.Control type="text" placeholder="url" value ={imgState[0]|| " "} onChange={(e) => handleImgChange(e, 0)} />
          <Form.Control type="text" placeholder="url" value ={imgState[1]|| " "} onChange={(e) => handleImgChange(e, 1)} />
          <Form.Control type="text" placeholder="url" value ={imgState[2]|| " "} onChange={(e) => handleImgChange(e, 2)} />
          <Form.Control type="text" placeholder="url" value ={imgState[3]|| " "} onChange={(e) => handleImgChange(e, 3)} />
          <Form.Control type="text" placeholder="url" value ={imgState[4]|| " "} onChange={(e) => handleImgChange(e, 4)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Changes
        </Button>
        <Button variant="danger"  type='submit' onClick ={onDeleteHandler}>
        Delete
       </Button> 
      </Form>
    </Container>
    
  )
}


export default UpdateProperty