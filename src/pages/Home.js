import React from 'react'
import './Home.css'
import MainSlideshow from '../components/Home/MainSlideshow'
import SecondSlideshow from '../components/Home/SecondSlideshow'
import SecondSlideContext from '../components/Home/SecondSlideContext'
import BackToStock from '../components/Home/BackToStock'
import AboutContext from '../components/Home/AboutContext'
		  
function Home() {
    return (
		<div className="home">
			<MainSlideshow />
			<BackToStock />
			<div className='homeSecondSlideShow'>
				<SecondSlideshow />
				<SecondSlideContext />
			</div>
			<AboutContext />
					  
		</div>
	)
}
		  
export default Home
		  