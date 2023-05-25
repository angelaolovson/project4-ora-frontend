import { useEffect, useState } from 'react'
import PropertyItem from '../components/Listing/PropertyItem';
import { Row, Col } from 'react-bootstrap';
import './Listing.css'
import SecNav from '../components/Nav/SecNav';


const Listing = () => {
  const [propertiesState, setPropertiesState] = useState(null);
  const [filters, setFilters] = useState(null);

  const URL = 'https://airbnb-main.onrender.com';

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let url = URL;
        if (filters) {
          // Convert filters object to query parameters
          const params = new URLSearchParams(filters);
          url = `${url}/filter?${params.toString()}`;
        }
        let responseData = await fetch(url);
        let allProperties = await responseData.json();
        setPropertiesState(allProperties);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, [filters]);

  let propertiesList;

  if (Array.isArray(propertiesState)) {
    propertiesList = propertiesState.map((property, index) => (
      <Col key={index}>
        <PropertyItem property={property} />
      </Col>
    ));
  }

  return (
    <>
      <SecNav setFilters={setFilters} />
      <div className='allProperties'>
        {propertiesList && propertiesList.length > 0 ? (
          <Row xs={1} md={4} className='g-4'>
            {propertiesList}
          </Row>
        ) : (
          <h2>No properties found</h2>
        )}
      </div>
    </>
  );
};

export default Listing;