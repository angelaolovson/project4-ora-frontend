import React from 'react'
import './Selfcare.css'
import { Link } from 'react-router-dom';


function Selfcare() {
    return (
		<div className="selfcare">
		  <div className="pagesMain1">
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://orabytangni.com/cdn/shop/products/Woodwick-candle-set-pink-toulle_360x.jpg?v=1642011679"
				alt="Candles"
			  />
			</div>
			<div className="contextContainer">
			  <div>Title</div>
			  <div>Description</div>
			  <div>
				<Link className="shopSign" to="/selfcare/candles">
				  Shop Candles
				</Link>
			  </div>
			</div>
		  </div>
		  <div className="pagesMain2">
			<div className="contextContainer">
			  <div>Title</div>
			  <div>Description</div>
			  <div>
				<Link className="shopSign" to="/selfcare/incense">
				  Shop Incense
				</Link>
			  </div>
			</div>
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://i.imgur.com/SYDD1ii.png"
				alt="Incense"
			  />
			</div>
		  </div>
		</div>
	  );
}
		  
export default Selfcare
		  