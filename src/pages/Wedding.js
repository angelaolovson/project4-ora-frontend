import React from 'react'
import { Link } from 'react-router-dom'
		  
function Wedding() {
    return (
		<div className="flex flex-col w-full p-8">
			<div className='text-center text-3xl tracking-widest mb-8'>Let us take care of your best day</div>
			<div className="flex">
				<div className="flex items-center justify-center w-1/3 h-[70vh] relative p-2 overflow-hidden group rounded">
					<img
						className="w-full h-full object-cover rounded transform transition-transform duration-300 group-hover:scale-110"
						id="firstImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689979922/Ora/Wedding/bridal-bouquet-ranunculus-vine-sweet-pea-silk-ribbon_c781ea84-b7ad-41ec-86a4-f113dd885786_2100x_elhiy9.jpg"
						alt="Bridal Bouquet"
					/>		
					<div className='absolute w-full text-center top-3/4 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Bridal Bouquet</div>
					<div className='flex items-center justify-center absolute w-[40%] h-[7%] bg-[#83884E] top-3/4 transform translate-y-1/2 mt-2'>
						<Link className="text-white" to="/product/64bb1bd2d21d07f27a27e705">
							Shop Now
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-center w-1/3 h-[70vh] relative p-2 overflow-hidden group rounded">
					<img
						className="w-full h-full object-cover rounded transform transition-transform duration-300 group-hover:scale-110"
						id="secondImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689983366/Ora/Wedding/Angela%2BKyle/arch-v2.jpg"
						alt=""
					/>		
					<div className='absolute w-full text-center top-3/4 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Wedding Gallery</div>
					<div className='flex items-center justify-center absolute w-[40%] h-[7%] bg-[#83884E] top-3/4 transform translate-y-1/2 mt-2'>
						<Link className="text-white" to="/weddinggallery">
							Explore Now
						</Link>
					</div>
				</div>	

				<div className="flex items-center justify-center w-1/3 h-[70vh] relative p-2 overflow-hidden group rounded">
					<img
						className="w-full h-full object-cover rounded transform transition-transform duration-300 group-hover:scale-110"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548962/Ora/Wedding/BK%20Botanical%20Garden/ANW_665_bpg0mc.jpg"
						alt=""
					/>		
					<div className='absolute w-full text-center top-3/4 transform -translate-y-1/2 text-white font-extrabold tracking-wider text-3xl z-10'>Service Guideline</div>
					<div className='flex items-center justify-center absolute w-[40%] h-[7%] bg-[#83884E] top-3/4 transform translate-y-1/2 mt-2'>
						<Link className="text-white" to="/serviceguideline">
							Explore Now
						</Link>
					</div>
				</div>		  
		  
			</div>  
		</div>
	)
}
		  
export default Wedding
		  