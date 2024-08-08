import React, { useEffect, useState } from 'react'
import './EachCouple.css'
import { useParams } from 'react-router-dom';

function EachCouple() {
	const {id} = useParams()
	const [eachCouplesState, setEachCouplesState] = useState()
	const url = `https://capstone-ora-backend.onrender.com/product/${id}`;

	useEffect(() => {
		const fetchEachCouple = async () => {
		  try {
			const responseData = await fetch(url);
			if (!responseData.ok) {
			  throw new Error("Failed to fetch couple data");
			}
			const eachCoupleData = await responseData.json();
			setEachCouplesState(eachCoupleData);
		  } catch (error) {
			console.log(error);
		  }
		};
	
		fetchEachCouple();
	}, [id, url]);
	
	if (!eachCouplesState) {
	return <div>Loading...</div>;
	}

    return (
		<div className='eachcouple'>
			{eachCouplesState.title && <div className='eachcoupleName'>{eachCouplesState.title}</div>}
			<div className='eachcoupleImgDivs'>
				{eachCouplesState.images.map((image, index) => (
					<div className='eachcoupleImgDiv'>
						<img className='eachcoupleImg' key={index} src={image} alt='' />
					</div>
				))}
			</div>
		</div>
	);
}
		  
export default EachCouple
		  