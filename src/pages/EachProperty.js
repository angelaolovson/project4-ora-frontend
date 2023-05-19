import React, { useEffect, useState } from 'react'
import './EachProperty.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EachProperty = () => {
  const [eachPropertyState, setEachPropertyState] = useState(null);

  const {id} = useParams();
  console.log(useParams())
  const url = `https://airbnb-main.onrender.com/listing/${id}`;

  useEffect(() => {
    const fetchEachProperty = async () => {
      console.log("going to fetch person with id of: ", id);
      try {
        const responseData = await fetch(url);
        const eachPropertyData = await responseData.json();
        console.log(eachPropertyData);
        setEachPropertyState(eachPropertyData);
      } catch (error) {
        console.log(error)
      }
    };

    fetchEachProperty();
    
  }, [id])



  return (
    <div className='eachProperty'>
      {eachPropertyState ? (
        <>
          <div>
            <h2>{eachPropertyState.title}</h2>
            <h3>{eachPropertyState.address}</h3>
            <div>
              <img
                className="eachProperty-pic"
                src={eachPropertyState.images}
                alt="profile pic"
              />
            </div>

            <h3>something</h3>
            <p>something</p>
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