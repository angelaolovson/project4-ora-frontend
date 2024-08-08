import React from 'react'
import { Link } from 'react-router-dom';

function Bouquet() {
    return (
		<div className="flex flex-col w-full p-8">
			<div className='text-center text-3xl tracking-widest mb-8'>FLOWERS</div>
			<div className="flex">
				<div className="flex items-center justify-center w-1/2 h-[70vh] relative px-8 py-2 overflow-hidden">
					<img
						className="w-full h-full object-cover rounded"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377967/Ora/freshFlowers/Merida_ql6x5n.jpg"
						alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Fresh Flowers</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/bouquet/freshFlowers">
							Shop Now
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-center w-1/2 h-[70vh] relative px-8 py-2 overflow-hidden">
					<img
						className="w-full h-full object-cover rounded"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689712914/Ora/driedFlowers/hiddenbotanicsweddings-bouquets-colourful-dried-flower-bridal-bouquet-golden-yellow-green-no-1-30217299427395_1296x_hkz3pg.webp"
						alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Dried Flowers</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/bouquet/driedFlowers">
							Shop Now
						</Link>
					</div>
				</div>		  
		  
			</div>  
		</div>
	  );
}
		  
export default Bouquet
		  