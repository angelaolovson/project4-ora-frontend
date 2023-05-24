import { useEffect, useState} from 'react'
import PropertyItem from '../components/Listing/PropertyItem';
import { Row, Col } from 'react-bootstrap';
import './Listing.css'
import SecNav from '../components/Nav/SecNav';
import { useLocation } from 'react-router-dom';


const Search = () => {
  const location = useLocation();
  const resultState = location.state?.resultState;

  let resultList;
  if (resultState) {
    resultList = resultState.map((property, index) => (
        <Col key={index}>
          <PropertyItem  property={property} />
        </Col>
    ))
  }

  if(!resultState || resultState.length === 0) {
    return <p> No search result</p>
  }

  return (
    <>
      <SecNav />
      <div className='allProperties'>
        {resultState ? (
          <Row xs={1} md={4} className="g-4">
            {resultList}
          </Row>
        ) : (
          <h2>LOADING</h2>
        )}
      </div>
    </>
  )
}

export default Search;