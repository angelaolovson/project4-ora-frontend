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
			<div className="pageContextContainer">
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
			<div className="pageContextContainer">
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
		  <div className="pagesMain3">
			<div className="pageContextContainer">
			  <div>Hydrate</div>
			  <div>Description</div>
			  <div>
				<Link className="shopSign" to="/selfcare/hydrate">
				  Shop Hydrate
				</Link>
			  </div>
			</div>
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://i.imgur.com/SYDD1ii.png"
				alt="Hydrate"
			  />
			</div>
		  </div>
		  <div className="pagesMain4">
			<div className="pageContextContainer">
			  <div>Cleanse</div>
			  <div>Description</div>
			  <div>
				<Link className="shopSign" to="/selfcare/cleanse">
				  Shop Cleanse
				</Link>
			  </div>
			</div>
			<div className="imgContainer">
			  <img
				className="pagesImg"
				src="https://i.imgur.com/SYDD1ii.png"
				alt="Cleanse"
			  />
			</div>
		  </div>
		</div>
	  );
}
		  
export default Selfcare
		  