import React from 'react'
import MainSlideshow from '../components/Home/MainSlideshow'
import SecondSlideshow from '../components/Home/SecondSlideshow'
import SecondSlideContext from '../components/Home/SecondSlideContext'
import BackToStock from '../components/Home/BackToStock'
import AboutContext from '../components/Home/AboutContext'
		  
function Home() {
    return (
		<div className="flex flex-col w-full">
			<MainSlideshow />
			<BackToStock />
			<div className='flex w-full'>
				<SecondSlideshow />
				<SecondSlideContext />
			</div>
			<AboutContext />
					  
		</div>
	)
}
		  
export default Home
		  