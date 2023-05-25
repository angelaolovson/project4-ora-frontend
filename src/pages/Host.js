import React, {useState, useEffect} from 'react'
import './Host.css'
import { useParams } from 'react-router-dom'
import { Col, Container, Row, Figure, Button} from 'react-bootstrap'

		  
function Host() {
	 const [userState, setUserState] = useState(null)
	
	 const {id} = useParams();
	 useEffect(() => {
		const fetchUserData = async () => {
	
		  try {
			const responseData = await fetch(`http://localhost:4000/user/${id}`);
	
			const userData = await responseData.json();

			setUserState(userData);
			console.log(userData)
		  } catch (error) {
			console.log(error)
		  }
		};
		fetchUserData();

	 },[id])
    return (
	    <Container>
			{userState? (
				<Row>
		
				<Col className='border' sm={3}>
				<Figure>
					<Figure.Image
						width={171}
						height={180}
						alt="171x180"
						src= {userState.image}
					/>
					<Figure.Caption>
						Nulla vitae elit libero, a pharetra augue mollis interdum.
					</Figure.Caption>
				</Figure>
					<Col className='border' md={{ span: 6, offset: 3 }}>
							{userState.username}
					</Col>
					<Col className='border' md={{ span: 6, offset: 3 }}>
							{userState.occupation}
					</Col>
					<Col className='border' md={{ span: 6, offset: 3 }}>
							{userState.description}
					</Col>
					<Col className='border' md={{ span: 6, offset: 3 }}>
							{userState.reviewsGiven.length} Reviews Given
						
					</Col>
					<Col className='border' md={{ span: 6, offset: 3 }}>
							{userState.username}'s Confirmed Inforamtion
							identity
							Email address
							Phone Number
					</Col>
					<Button variant="secondary">Send Message</Button>

				</Col>
				<Col className="border" sm={9}>2 of 2</Col>
			</Row>	
			):(
			<p>Loading</p>
			)}
  
    </Container>
	)
}
		  
export default Host
