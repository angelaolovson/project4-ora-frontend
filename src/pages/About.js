import React from 'react'
		  
function About() {
    return (
		<div className="flex flex-col">
			<div className='w-full h-[70vh] overflow-hidden mb-5 relative'>
				<img className="w-full h-full object-cover" src='https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548934/Ora/Product/Ora_Flores_112021-421_urjllj.jpg' alt="pic"/>
				<div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-lg text-white font-bold text-center">ORA LA CASA DE LAS FLORES AND ORA BY TANGNI</div>
			</div>

			<div className="text-2xl font-semibold text-center"> 
				<p>Our Story, Our Purpose</p>
				<p>We are two of one!</p>
			</div>

			<div className='flex p-12 gap-4'>
				<div className='flex flex-col w-[50%] justify-around'>
					<div>Welcome! We are a boutique floral studio with an emphasis on local flowers, and botanical skincare based in New York City. Our physical store is what we refer to as Ora La Casa de Las Flores and our botanical skincare line refers to Ora by Tangni.</div>
					<div className='text-xl text-center'>•</div>
					<div>At Ora La Casa de Las Flores, we aim to help beautify your home and life through our floral art and designs.</div>
					<div className='text-xl text-center'>•</div>
					<div>Ora by Tangni promotes a lifestyle that excludes the exploitation and cruelty towards Mother Nature for the purposes of beauty.</div>
					<div className='text-xl text-center'>•</div>
					<div>Our Purpose and mission ultimately is to give back to Mother Earth. By sourcing our ingredients from only the best found in nature, we create our products with only a handful of ingredients - all natural and harvested from botanics locally.</div>
					<div className='text-xl text-center'>•</div>
					<div>We source ethically and only from what we need. By creating a smaller demand for each sourced ingredient, we’re trying to create awareness in the beauty industry that less is more.</div>
				</div>
				<div className='group w-[50%] h-full relative overflow-hidden'>
					<img className="transform transition-transform duration-300 group-hover:scale-110" src='https://res.cloudinary.com/dlxrcak5o/image/upload/v1689955293/Ora/Store/d86a4076_nh3syf.jpg' alt="pic"/>
				</div>
			</div>
					  
		</div>
	)
}
		  
export default About
		  