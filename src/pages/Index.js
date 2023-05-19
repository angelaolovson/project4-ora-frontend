import { useEffect, useState } from 'react'
import PropertyItem from '../components/Listing/PropertyItem';

const Index = () => {
  const [propertiesState, setPropertiesState] = useState(null);

  const URL = "https://airbnb-main.onrender.com";

  useEffect(() => {
    console.log("UseEffect ran")
    const fetchProperties = async () => {
      try {
        let responseData = await fetch(URL);
        let allProperties = await responseData.json()
        console.log(allProperties);
        setPropertiesState(allProperties)
      } catch (error) {
        console.log(error)
      };
    };

    fetchProperties();
  },[]);

  let propertiesList

  if (propertiesState) {
    propertiesList = propertiesState.map((property, index) => {
      return<PropertyItem key={index} property={property} />
    })
  }
  return (
    <div className='allProperties'>
      {propertiesState ? (
        <ul>{propertiesList}</ul>
      ) : (
        <h2>LOADING</h2>
      )}
    </div>
  )
}

export default Index