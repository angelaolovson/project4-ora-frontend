import React, {useEffect, useRef} from 'react'
import './Map.css'
		  
function Map(props) {
	const mapRef = useRef();
	const {center, zoom} = props;
    
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
};
		  
export default Map
		  