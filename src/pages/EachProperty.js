import React, { useEffect, useState } from 'react'
import './EachProperty.css'
import { NavLink, useParams } from 'react-router-dom'
import Map from '../components/Listing/Map'
import Booking from '../components/Listing/Booking'
import Host from '../components/Listing/Host'
import BookingCalendar from '../components/Listing/BookingCalendar'
import Review from '../components/Listing/Review';

const EachProperty = (property) => {
  const [eachPropertyState, setEachPropertyState] = useState(null);
  const likeIcon = '\u2665';
  //console.log(eachPropertyState,"each property state")

  const { id } = useParams();
  // console.log(id)
  // console.log(useParams())
  const url = `https://airbnb-main.onrender.com/listing/${id}`;

  useEffect(() => {
    const fetchEachProperty = async () => {
      // console.log("going to fetch property with id of: ", id);
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

  }, [id, url])

  const solidStar = '\u2605';

  return (
    <main className='propertyMain'>
      {eachPropertyState ? (
        <>
          <div className='eachProperty'>
            <h2 className='eachPropertyTitle'>{eachPropertyState.property.title}</h2>

            <div className='secRow'>
              <div>
                <span className='RatingAndLocation'>{solidStar}Rating: {eachPropertyState.property.rating.toFixed(2)}</span>
                <span className='RatingAndLocation'>{eachPropertyState.property.city}, {eachPropertyState.property.country}</span>
              </div>
              <div className='secRowLike'>{likeIcon} Save</div>
            </div>

            <div className='proertyImgRow'>
              {/* {eachPropertyState.property.images.map((image, index) => (
                <img
                  key={index}
                  className="eachProperty-pic"
                  src={image}
                  alt="property pic"
                />
              ))} */}
              <div className='propertyImgColMain'><img className="eachProperty-imgMain" src={eachPropertyState.property.images[0]} alt="property pic"/></div>
              <div className='propertyImgCol'>
                <img className="eachProperty-imgs" src={eachPropertyState.property.images[1]} alt="property pic"/>
                <img className="eachProperty-imgs" src={eachPropertyState.property.images[2]} alt="property pic"/>
                <img className="eachProperty-imgs" src={eachPropertyState.property.images[3]} alt="property pic"/>
                <img className="eachProperty-imgs" src={eachPropertyState.property.images[4]} alt="property pic"/>
              </div>
            </div>

            <div className='propertyInfoAndBooking'>

              <div className='propertyInfo'>

                <div>
                  <div className='propertyHost'>Entire home hosted by {eachPropertyState.property.username}</div>
                  <div className='propertyRooms'>{eachPropertyState.property.guestNumber} guests · {eachPropertyState.property.bedroomNumber} bedrooms · {eachPropertyState.property.bedNumber} beds · {eachPropertyState.property.bathroomNumber} bathrooms
                  </div>
                </div>
                <hr/>
                <div>
                  <div className='propertyOffers'>What this place offers</div>
                  <div className='propertyOffersList'>{eachPropertyState.property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                  </div>
                </div>
                <hr/>
                <div className='calendar'>
                  <div className='fullcalendar'>
                    <div className='single-cal'>
                      <BookingCalendar bookings={eachPropertyState.property.bookings} />
                    </div>
                    <div>
                      <BookingCalendar bookings={eachPropertyState.property.bookings} />
                    </div>
                  </div>

                  <div>Calendar: Number nights in {eachPropertyState.property.city}</div>
                  <div className='dates'>date to date</div>
                  <div>Clear dates button </div>
                </div>

              </div>

              <div className='bookingComponent'><Booking property={eachPropertyState} /></div>

            </div>

            <div>
              <Host />
            </div>
            <div><Review reviews={eachPropertyState.property.reviews} rating={eachPropertyState.property.rating} /></div>

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