import React, { useState } from 'react'
import './SecondSlideshow.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SecondSlideshow() {
    const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
	  setIndex(selectedIndex);
	};
  
	return (
		<div className='secondslideshow'>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item className='secondslideshowItem'>
					<img
						className="secondslideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548988/Ora/SkinCare/Ora_Flores_112021-224_fwx1cq.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item className='secondslideshowItem'>
					<img
						className="secondslideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549015/Ora/SkinCare/Ora_Flores_112021-168_fejy8z.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item className='secondslideshowItem'>
					<img
						className="secondslideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549003/Ora/SkinCare/Ora_Flores_112021-197_xrufa6.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
	  </div>
	);
}
		  
export default SecondSlideshow
		  