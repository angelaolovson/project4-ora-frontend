import React from 'react'
import './WeddingMenu.css'
import { Link } from 'react-router-dom';

function WeddingMenu() {
    return (
		<div className="weddingmenu">
			{/* <div className='weddingmenuh2'>Bouquet</div> */}
			<div className="weddingmenuContainers">
				<div className="weddingmenuContainer">
					<img
						className="weddingmenuImg"
						id="firstImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689979922/Ora/Wedding/bridal-bouquet-ranunculus-vine-sweet-pea-silk-ribbon_c781ea84-b7ad-41ec-86a4-f113dd885786_2100x_elhiy9.jpg"
						alt="Bridal Bouquet"
					/>		
					<div className='weddingmenuTitle'>Bridal Bouquet</div>
					<div className='weddingmenuLink'>
						<Link className="weddingmenuShopSign" to="/product/64bb1bd2d21d07f27a27e705">
							Shop Now
						</Link>
					</div>
				</div>

				<div className="weddingmenuContainer">
					<img
						className="weddingmenuImg"
						id="secondImage"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689983366/Ora/Wedding/Angela%2BKyle/arch-v2.jpg"
						alt=""
					/>		
					<div className='weddingmenuTitle'>Wedding Gallery</div>
					<div className='weddingmenuLink'>
						<Link className="weddingmenuShopSign" to="/weddinggallery">
							Explore Now
						</Link>
					</div>
				</div>	

				<div className="weddingmenuContainer">
					<img
						className="weddingmenuImg"
						src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548962/Ora/Wedding/BK%20Botanical%20Garden/ANW_665_bpg0mc.jpg"
						alt=""
					/>		
					<div className='weddingmenuTitle'>Service Guideline</div>
					<div className='weddingmenuLink'>
						<Link className="weddingmenuShopSign" to="/serviceguideline">
							Explore Now
						</Link>
					</div>
				</div>		  
		  
			</div>  
		</div>
	  );
}
		  
export default WeddingMenu
		  