import React from 'react'
import './Bouquet.css'
import { Link } from 'react-router-dom';


function Bouquet() {
    return (
		<div className="bouquet">
		  <div className="pagesMain1">
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://orabytangni.com/cdn/shop/files/ranunculus-roses-pink-tulle_1800x.jpg?v=1643843866"
				alt="Fresh Flowers"
			  />
			</div>
			<div className="pageContextContainer">
			  <div>Title</div>
			  <div>Description</div>
			  <div>
				<Link className="shopSign" to="/bouquet/freshFlowers">
				  Shop Fresh Flowers
				</Link>
			  </div>
			</div>
		  </div>
		  <div className="pagesMain2">
			<div className="pageContextContainer">
			  <div>Title</div>
			  <div>Description</div>
			  <div>
			  	<Link className="shopSign" to="/bouquet/driedFlowers">
				  Shop Dried Flowers
				</Link>
			  </div>
			</div>
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/23/bf2af688-956b-4365-8c6d-bd1e3f46aceb.jpg"
				alt="Fresh Flowers"
			  />
			</div>
		  </div>
		</div>
	  );
}
		  
export default Bouquet
		  