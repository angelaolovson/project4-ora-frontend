import React from 'react'
import './Bouquet.css'
import { Link } from 'react-router-dom';


function Bouquet() {
    return (
		<div className="bouquet">
			<div className='bouqueth2'>Bouquet</div>
			<div className="bouquetContainers">
				<div className="bouquetContainer">
					<img
					className="bouquetImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377967/Ora/freshFlowers/Merida_ql6x5n.jpg"
					alt="Candles"
					/>		
					<div className='bouquetTitle'>Fresh Flowers</div>
					<div className='bouquetLink'>
						<Link className="bouquetShopSign" to="/bouquet/candles">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="bouquetContainer">
					<img
					className="bouquetImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377967/Ora/freshFlowers/Merida_ql6x5n.jpg"
					alt="Candles"
					/>		
					<div className='bouquetTitle'>Dried Flowers</div>
					<div className='bouquetLink'>
						<Link className="bouquetShopSign" to="/bouquet/hydrate">
							Shop Now
						</Link>
					</div>
				</div>		  
		  
			</div>  
		</div>
	  );
}
		  
export default Bouquet
		  