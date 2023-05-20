import { useEffect, useState } from 'react'
import PropertyItem from '../components/Listing/PropertyItem';
import { Row, Col } from 'react-bootstrap';
import './Listing.css'
import SecNav from '../components/Nav/SecNav';


const Listing = () => {
  const [propertiesState, setPropertiesState] = useState(null);
  const [cityState, setCityState] = useState(null);
  const [countryState, setCountryState] = useState(null);

  const URL = "https://airbnb-main.onrender.com";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let responseData = await fetch(URL);
        
        let allProperties = await responseData.json()
        console.log(allProperties)
        //Retrieve the city and country from the response
        const {city, country} = allProperties;


        setPropertiesState(allProperties)
        setCityState(city);
        setCountryState(country);
        
        console.log(city,country,"city and country")
      } catch (error) {
        console.log(error)
      };
    };

    fetchProperties();
  },[]);

  let propertiesList

  if (propertiesState) {
    propertiesList = propertiesState.map((property, index) => (
        <Col key={index}>
          <PropertyItem  property={property} />
        </Col>
    ))
  }


  return (
    <>
      <SecNav setPropertiesState={setPropertiesState} />
      <div className='allProperties'>
        {propertiesState ? (
          <Row xs={1} md={4} className="g-4">
            {propertiesList}
          </Row>
        ) : (
          <h2>LOADING</h2>
        )}
      </div>
    </>
  )
}

export default Listing;