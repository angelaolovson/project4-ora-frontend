import React, { useEffect, useState } from 'react'
import './EachProperty.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Map from '../components/Listing/Map'

const EachProperty = (property) => {
  const [eachPropertyState, setEachPropertyState] = useState(null);
  //console.log(eachPropertyState,"each property state")
  
  const {id} = useParams();
  // console.log(id)
  // console.log(useParams())
  const url = `https://airbnb-main.onrender.com/listing/${id}`;
  
  useEffect(() => {
    const fetchEachProperty = async () => {
      console.log("going to fetch property with id of: ", id);
      try {
        const responseData = await fetch(url);
        // console.log("fetching checking start")
        // console.log(responseData)
        // console.log("fetching checking end")
        const eachPropertyData = await responseData.json();
        //console.log(eachPropertyData);
        setEachPropertyState(eachPropertyData);
      } catch (error) {
        console.log(error)
      }
    };
    
    fetchEachProperty();
    console.log(eachPropertyState,"each property state")
    
  }, [id, url])



  return (
    <div className='eachProperty'>
      {eachPropertyState ? (
        <>
          <div>
            <h2>Title: {eachPropertyState.property.title}</h2>
            <h3>Address: {eachPropertyState.property.address}</h3>
            <div>
              {eachPropertyState.property.images.map((image, index) => (
                <img
                  key={index}
                  className="eachProperty-pic"
                  src={image}
                  alt="property pic"
                />
              ))}
            </div>

            <h3>something</h3>
            <p>something</p>
            <Map center={eachPropertyState.property.location} zoom={18} />

            <Link to={`/${eachPropertyState._id}/edit`}>
              <button>EDIT</button>
            </Link>
          </div>
        </>
      ) : (
        "...loading"
      )}
    </div>
  )
}

export default EachProperty;