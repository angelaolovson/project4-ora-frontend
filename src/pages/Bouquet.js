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
						<Link className="bouquetShopSign" to="/bouquet/freshFlowers">
							Shop Now
						</Link>
					</div>
				</div>

				<div className="bouquetContainer">
					<img
						className="bouquetImg"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689712914/Ora/driedFlowers/hiddenbotanicsweddings-bouquets-colourful-dried-flower-bridal-bouquet-golden-yellow-green-no-1-30217299427395_1296x_hkz3pg.webp"
						alt="Candles"
					/>		
					<div className='bouquetTitle'>Dried Flowers</div>
					<div className='bouquetLink'>
						<Link className="bouquetShopSign" to="/bouquet/driedFlowers">
							Shop Now
						</Link>
					</div>
				</div>		  
		  
			</div>  
		</div>
	  );
}
		  
export default Bouquet
		  