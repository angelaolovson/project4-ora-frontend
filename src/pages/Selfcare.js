import React from 'react'
import './Selfcare.css'
import { Link } from 'react-router-dom';


function Selfcare() {
    return (
		<div className="selfcare">
			<div className='selfcareh2'>SelfCare</div>
			<div className="selfcareContainers">
				<div className="selfcareContainer">
					<img
					className="selfcareImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548931/Ora/Product/Ora_Flores_112021-247_kdtoci.jpg"
					alt="Candles"
					/>		
					<div className='selfcareTitle'>Candles</div>
					<div className='selfcareLink'>
						<Link className="selfcareShopSign" to="/selfcare/candles">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="selfcareContainer">
					<img
					className="selfcareImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549010/Ora/Product/Ora_Flores_112021-336_q0lmun.jpg"
					alt="Candles"
					/>		
					<div className='selfcareTitle'>Hydrate</div>
					<div className='selfcareLink'>
						<Link className="selfcareShopSign" to="/selfcare/hydrate">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="selfcareContainer">
					<img
					className="selfcareImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549014/Ora/SkinCare/Ora_Flores_112021-232_rdvpco.jpg"
					alt="Candles"
					/>		
					<div className='selfcareTitle'>Cleanse</div>
					<div className='selfcareLink'>
						<Link className="selfcareShopSign" to="/selfcare/cleanse">
							Shop Now
						</Link>
					</div>
				</div>
				<div className="selfcareContainer">
					<img
					className="selfcareImg"
					src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689626831/Ora/Product/My_project_anjfcm.jpg"
					alt="Candles"
					/>		
					<div className='selfcareTitle'>Incense</div>
					<div className='selfcareLink'>
						<Link className="selfcareShopSign" to="/selfcare/incense">
							Shop Now
						</Link>
					</div>
				</div>	
		  
		  
			</div>  
		</div>
	  );
}
		  
export default Selfcare
		  