import React, { useEffect, useState } from 'react'
import './EachProperty.css'
import { useParams } from 'react-router-dom'
import Map from '../components/Listing/Map'
import Booking from '../components/Listing/Booking'
import Host from '../components/Listing/Host'

const EachProperty = (property) => {
  const [eachPropertyState, setEachPropertyState] = useState(null);
  console.log(eachPropertyState,"each property state")
  
  const {id} = useParams();
  console.log(id)
  console.log(useParams())
  const url = `https://airbnb-main.onrender.com/listing/${id}`;
  
  useEffect(() => {
    const fetchEachProperty = async () => {
      console.log("going to fetch property with id of: ", id);
      try {
        const responseData = await fetch(url);
        console.log("fetching checking start")
        console.log(responseData)
        console.log("fetching checking end")
        const eachPropertyData = await responseData.json();
        console.log(eachPropertyData);
        setEachPropertyState(eachPropertyData);
      } catch (error) {
        console.log(error)
      }
    };
    
    fetchEachProperty();
    console.log(eachPropertyState,"each property state")
    
  }, [id, url])



  return (
    <main className='propertyMain'>
      {eachPropertyState ? (
        <>
          <div className='eachProperty'>
            <h2>{eachPropertyState.property.title}</h2>

            <div className='secRow'>
              <div>
                <spam>Reviews</spam>
                <spam>{eachPropertyState.property.city}, {eachPropertyState.property.country}</spam>
              </div>
              <div className='secRowLike'>Like</div>
            </div>

            <div className='proertyImg'>
              {eachPropertyState.property.images.map((image, index) => (
                <img
                  key={index}
                  className="eachProperty-pic"
                  src={image}
                  alt="property pic"
                />
              ))}
            </div>

            <div className='propertyInfoAndBooking'>

              <div className='propertyInfo'>

                <div className='propertyHostAndRooms'>
                  <div>Entire home hosted by {eachPropertyState.property.username}</div>
                  <div>{eachPropertyState.property.guestNumber} guests · {eachPropertyState.property.bedroomNumber} bedrooms · {eachPropertyState.property.bedNumber} beds · {eachPropertyState.property.bathroomNumber} bedrooms
                  </div>
                </div>
                
                <div className='propertyOffers'>
                  <div>What this place offers</div>
                  <div>{eachPropertyState.property.amenities.map((amenity, index) =>(
                      <div key={index}>{amenity}</div>
                    ))}
                  </div>
                </div>

                <div className='calendar'>
                  <div>Calendar: Number nights in {eachPropertyState.property.city}</div>
                  <div className='dates'>date to date</div>
                  <div>Clear dates button</div>
                </div>
                
              </div>

              <div className='bookingComponent'><Booking /></div>

            </div>

            <div>
              <Host />
            </div>
            <div>Rating and reviews</div>

            <div className='map'>
              <div>Where you'll be</div>
              <div><Map center={eachPropertyState.property.location} zoom={18} /></div>
            </div>


          </div>
        </>
      ) : (
        "...loading"
      )}
    </main>
  )
}

export default EachProperty;