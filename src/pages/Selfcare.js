import React from 'react'
import { Link } from 'react-router-dom';

function Selfcare() {
    return (
		<div className="flex flex-col w-full p-8">
			<div className='text-center text-3xl tracking-widest mb-8'>SELFCARE</div>
			<div className="flex flex-wrap">
				<div className="flex w-1/2 h-96 relative p-2 overflow-hidden">
					<img
					className="w-full h-full object-cover rounded"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548931/Ora/Product/Ora_Flores_112021-247_kdtoci.jpg"
					alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Candles</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/selfcare/candles">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="flex w-1/2 h-96 relative p-2 overflow-hidden">
					<img
					className="w-full h-full object-cover rounded"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549010/Ora/Product/Ora_Flores_112021-336_q0lmun.jpg"
					alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Hydrate</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/selfcare/hydrate">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="flex w-1/2 h-96 relative p-2 overflow-hidden">
					<img
					className="w-full h-full object-cover rounded"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549014/Ora/SkinCare/Ora_Flores_112021-232_rdvpco.jpg"
					alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Cleanse</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/selfcare/cleanse">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="flex w-1/2 h-96 relative p-2 overflow-hidden">
					<img
					className="w-full h-full object-cover rounded"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689626831/Ora/Product/My_project_anjfcm.jpg"
					alt="Candles"
					/>		
					<div className='absolute w-full text-center top-1/2 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Incense</div>
					<div className='absolute w-[20%] h-[10%] top-[57%] left-[40%] bg-[#83884E] flex items-center justify-center z-10'>
						<Link className="text-white" to="/selfcare/incense">
							Shop Now
						</Link>
					</div>
				</div>	
			</div>  
		</div>
	  );
}
		  
export default Selfcare
		  