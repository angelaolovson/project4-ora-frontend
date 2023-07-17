import React from 'react'
import './BackToStock.css'
		  
function BackToStock() {
    return (
		<div className="backtostock">
			<div className='btsTitle'>Back In Stock</div>
			<div className='btsContainer'>
				
				<div className='btsEachItem'>
					<a className='btsLinks' href='/product/64b4a45666697768989d2055'>
						<div className="btsEachItemImgContainer">
							<img className="btsEachItemImg" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548976/Ora/SkinCare/Ora_Flores_112021-165_itzkbr.jpg" alt="Back to Stock"/>
						</div>
						<div className='btsEachItemTitle'>Ingni</div>
						<div className='btsEachItemType'>Facial Serum</div>
					</a>
				</div>
				<div className='btsEachItem'>
					<a className='btsLinks' href='/product/64b4a5b566697768989d2075'>
						<div className="btsEachItemImgContainer">
							<img className="btsEachItemImg" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689549004/Ora/SkinCare/Ora_Flores_112021-220_nnzoor.jpg" alt="Back to Stock"/>
						</div>
						<div className='btsEachItemTitle'>Tasba</div>
						<div className='btsEachItemType'>Facial Exfoliator</div>
					</a>
				</div>
				<div className='btsEachItem'>
					<a className='btsLinks' href='/product/64b4a52366697768989d2065'>
						<div className="btsEachItemImgContainer">
							<img className="btsEachItemImg" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689548971/Ora/SkinCare/Ora_Flores_112021-186_jr0d8t.jpg" alt="Back to Stock"/>
						</div>
						<div className='btsEachItemTitle'>Sandalwood</div>
						<div className='btsEachItemType'>Body Butter</div>
					</a>
				</div>



			</div>
					  
		</div>
	)
}
		  
export default BackToStock
		  