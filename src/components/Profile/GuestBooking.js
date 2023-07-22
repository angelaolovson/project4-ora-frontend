import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import { Card, Row, Col, Figure, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const GuestBooking = () => {
  const auth = useContext(AuthContext);
  const [bookingState, setBookingState] = useState(null);
  const [sortedResult, setSortedResult] = useState([]);

 
  useEffect(()=>{
    const fetchBooking = async () => {
        try {
            //let responseData = await fetch(`https://capstone-ora-frontend.onrender.com/booking/host/${auth.userId}`)
            let responseData = await fetch(`https://airbnb-main.onrender.com/booking/host/${auth.userId}`)
            
            let allBookings = await responseData.json()
            //console.log(allBookings)

            setBookingState(allBookings)
            setSortedResult(allBookings)
        
        } catch (error) {
            console.log(error)
        }
    }
    fetchBooking();
  },[auth.userId])

  const handleSortClick = (sortType) => {
    let sortedList = [...bookingState]
  
  
  switch (sortType) {
    case 'recent':
        sortedList.sort((a,b)=>new Date(b.startDate)- new Date(a.startDate));
        break;
    case 'oldest':
        sortedList.sort((a,b)=> new Date(a.startDate) - new Date(b.startDate));
        break;
    case 'future':
        sortedList = sortedList.filter((item)=> new Date(item.startDate) > new Date());
        break;
    case 'past':
        sortedList = sortedList.filter((item) => new Date(item.startDate)< new Date());
        break;
        default:
        break;
  } 

  setSortedResult(sortedList)
}

  let bookingList;

  if(bookingState) {
        bookingList= sortedResult.map((info,index) => {

            const startDate = new Date(info.startDate).toLocaleDateString(undefined,{month:'short', day: 'numeric', year:'numeric'});
            const endDate = new Date(info.endDate).toLocaleDateString(undefined,{month:'short', day: 'numeric', year:'numeric'});
            const createDate = new Date(info.createdAt).toLocaleDateString()
            return (
              <Card key={index} style={{ borderRadius: '1em', width: '60%' }} className='booking'>
                <Card.Body >
                <Row>
                  <Col >
                  <Figure>
                      <Figure.Image
                        className="booking-image"
                        width={250}
                        height={400}
                        alt="171x180"
                        src={info.image}
                      />
                    </Figure>
                  </Col>
                  <Col className='booking-col'>
                  <NavLink style={{ color: 'black'}} to={`/listing/${info.listing}`}>
                <Card.Title as="h5">{info.city}</Card.Title>
                </NavLink>
                  <Card.Title> {startDate} to {endDate}</Card.Title>
                   <Card.Text className='text-left'>
                    {info.address}
                   </Card.Text>
                  <Card.Text>
                  Total {info.totalPrice} USD 
                  </Card.Text>
                  <NavLink to={`/user/${info.guest}`} >
                   <Button variant="outline-secondary">Contact Guest</Button>
                  </NavLink>
                  </Col>
                  </Row>
                </Card.Body>
                <p style={{ color: 'grey', fontSize: '10px' }}>Created at {createDate}</p>
          </Card>
            )
            })
  }
    // No booking
   if (!bookingState || bookingState.length === 0) {
    return <p>No Guest Booking Coming</p>;
  }

  return (
    <>
    <div className='sorted-button'>
        <DropdownButton id="dropdown-variants-Secondary" variant = "secondary" title="Sort By">
        <Dropdown.Item onClick={() => handleSortClick('recent')}>Recent</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortClick('oldest')}>Oldest</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortClick('future')}>Future</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortClick('past')}>Past</Dropdown.Item>
        </DropdownButton>
    </div>
    <Row className="hostListing">{bookingList}</Row>
    </>
  )
}

export default GuestBooking