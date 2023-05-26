import { useState } from 'react'
import './SecNav.css'

const SecNav = (props) => {
  const [price, setPrice] = useState(null);
  const [roomNumber, setRoomNumber] = useState(null);
  const [bedNumber, setBedNumber] = useState(null);
  const [bathroomNumber, setBathroomNumber] = useState(null);

  const onChangeHandler = (e, setValue) => {
      console.log(e.target.value);
      setValue(e.target.value);
  };

  const queryBuilder = async() => {
    const queryObject = {
      price,
      roomNumber,
      bedNumber,
      bathroomNumber
    };

  let queryArr = []
  for (let key in queryObject){
      if(key != null) {
          console.log(key)
          queryArr.push(`${key}=${queryObject[key]}`)
      }
  }

  console.log(queryArr);
  const queryString = queryArr.join("&")
  console.log(`http://localhost:4000/listing?${queryString}`)
  const listings = await fetch(`http://localhost:4000/listing?${queryString}`);
  console.log(listings);
  const data = await listings.json();
  console.log(data);
  props.setPropertiesState(data)
  // .then((response) => {
  //     response.json().then((data)=>{
  //         console.log(data)
  //     })
  // })
  }

  return (
    <div className='secNavBar'>
      <label>Price</label>
      <input type="number" onChange={(e) => onChangeHandler(e, setPrice)} />
      
      <label>RoomNumber</label>
      <input type="number" onChange={(e) => onChangeHandler(e, setRoomNumber)} />
      
      <label>Bed Number</label>
      <input type="number" onChange={(e) => onChangeHandler(e, setBedNumber)} />
      
      <label>Bathroom Number</label>
      <input type="number" onChange={(e) => onChangeHandler(e, setBathroomNumber)} />
        
      <button onClick={() => queryBuilder()}>Apply</button>
      
    </div>
  )
}
export default SecNav