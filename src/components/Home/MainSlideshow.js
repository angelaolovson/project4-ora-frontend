import React, { useState } from 'react'
import './MainSlideshow.css'
import { Carousel } from 'react-bootstrap';


function MainSlideshow() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
	  setIndex(selectedIndex);
	};
  
	return (
		<div className='mainslideshow'>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377969/Ora/freshFlowers/Ora_s_special_mgwf3p.jpg"
						alt="First slide"
					/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377969/Ora/freshFlowers/Ora_s_special_mgwf3p.jpg"
						alt="Second slide"
					/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377969/Ora/freshFlowers/Ora_s_special_mgwf3p.jpg"
						alt="Third slide"
					/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
	  </div>
	);
}
		  
export default MainSlideshow
		  