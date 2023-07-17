import React, { useState } from 'react'
import './MainSlideshow.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MainSlideshow() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
	  setIndex(selectedIndex);
	};
  
	return (
		<div className='mainslideshow'>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item className='slideshowItem'>
					<img
						className="slideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548984/Ora/Product/Ora_Flores_112021-369_whksya.jpg"
						alt="First slide"
					/>
				<Carousel.Caption>
					<h3 className='slideshowTitle'>Clear SKIN full HEART</h3>
					<p className='slideshowP'>The answer is in nature.</p>
					<div className='slideLinkContainer'><Link className='slideLinks' to='/selfcare'>Explore</Link></div>
					
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className='slideshowItem'>
					<img
						className="slideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549006/Ora/Wedding/BK%20Botanical%20Garden/ANW_709_vsnvwg.jpg"
						alt="Second slide"
					/>
				<Carousel.Caption>
					<h3 className='slideshowTitle'>Love Blooms Here</h3>
					<p className='slideshowP'>Make your special day blossom with our unique floral arrangements.</p>
					<div className='slideLinkContainer'><Link className='slideLinks' to='/wedding'>Book</Link></div>
					
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className='slideshowItem'>
					<img
						className="slideshowImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548989/Ora/Product/Ora_Flores_112021-294_rjyz4s.jpg"
						alt="Third slide"
					/>
				<Carousel.Caption>
					<h3 className='slideshowTitle'>Ignite Serenity</h3>
					<p className='slideshowP'>Immerse yourself in tranquil bliss with our scented candles.</p>
					<div className='slideLinkContainer'><Link className='slideLinks' to='/selfcare/candles'>Shop</Link></div>
					
				</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
	  </div>
	);
}
		  
export default MainSlideshow
		  