import React from 'react'
		  
function Footer() {
    return (
		<section className="flex flex-col justify-between w-full bg-[#E2DCD3] py-9">
			<div className="flex justify-around mb-4">
				<div>
					<div className="font-bold mb-1">Contact</div>
					<div>Email: tangni@orabytangni.com</div>
					<div>Phone Number: +1 718 255 1609</div>
				</div>
				<div>
					<div className="font-bold mb-1">Store Address</div>
					<div>42-08 43rd Ave, Sunnyside, NY 11104</div>
					<div>Everyday 11 am - 7 pm</div>
				</div>
				<div>
					<div className="font-bold mb-1">Follow us on Instagram!</div>
					<div>
						<a href="https://www.instagram.com/ora_lacasadelasflores/" target="_blank" rel="noopener noreferrer">@ora_lacasadelasflores</a>
					</div>
				</div>

			</div>

			<div className='text-center'>My Application copyright 2023 Angela Olovson</div>	  
		</section>
	)
}
		  
export default Footer
		  

