import React, {useEffect, useRef} from 'react'
import './Map.css'
		  
function Map(props) {
	const mapRef = useRef();
	const {center, zoom} = props;
    // const mapContainerStyle = {
	// 	width: '100%',
	// 	height: '400px'
	//   };
	
	//   const center = {
	// 	lat: 37.7749, // Specify the latitude of the center point
	// 	lng: -122.4194 // Specify the longitude of the center point
	//   };

	useEffect(() => {
		//creating the actual map
		const map = new window.google.maps.Map(mapRef.current, {
			center: center,
			zoom: zoom
		})


		 //Now lets add a red marker!📌
		new window.google.maps.Marker({ position: center, map: map});
	}, [center, zoom]);



	return <div ref={mapRef} id="mapContainer" className='map'></div>;
	
	//   return (
	// 	<LoadScript googleMapsApiKey="YOUR_API_KEY"> {/* Replace YOUR_API_KEY with your actual Google Maps API key */}
	// 	  <GoogleMap
	// 		mapContainerStyle={mapContainerStyle}
	// 		center={center}
	// 		zoom={10} // Specify the initial zoom level of the map
	// 	  >
	// 		<Marker position={center} /> {/* Add a marker at the center position */}
	// 	  </GoogleMap>
	// 	</LoadScript>
	//   );
}
		  
export default Map
		  