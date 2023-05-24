import React, {useEffect, useContext, useState} from 'react';
import { AuthContext } from '../context/auth-context';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SideBar from '../components/Profile/SideBar';
import './Profile.css';
import ListingSec from '../components/Profile/ListingSec';
import BookingSec from '../components/Profile/BookingSec';
import ReviewSec from '../components/Profile/ReviewSec';
import AnalyzeSec from '../components/Profile/AnalyzeSec';
import PastBooking from '../components/Profile/PastBooking';
import GuestBooking from '../components/Profile/GuestBooking';



const Profile = () => {
  //use authContext to grab id
  const auth = useContext(AuthContext);
  //profile state
  const [profile,setProfile] = useState(null);
  //  console.log("🤓",auth.userId)
  // Active State
  const [activeState,setActiveState] = useState('listing')
  const handleSectionChange = (section) =>{
    setActiveState(section)
  }
 
  useEffect(() => {
    console.log('useEffect ran')
      if(auth.userId){
        console.log('auth ok')
        const profileFetch = async() =>{
          try{
              const options = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              };
              
              const responseData = await fetch(
                `http://localhost:4000/user/${auth.userId}`, options
              );
            
              const profileData = await responseData.json();
              setProfile(profileData);
              console.log(profileData);
            
          } catch (error) {
            console.log(error);
          }
        }
        profileFetch();
      }
    }, [auth.userId])
 

 

  return (
    <div className='dashboard'>
  
        <>{profile? (
               <div className='SideBar'>
               <SideBar profile = {profile}/>
             </div>
        ): (
          <div className='SideBar'>
            <p>Loading</p>
          </div>
        )}
     
          <div className='ButtonBar'>
            <div className = 'button-container'>
              <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('listing')}>
            Property
            </Button>
            <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('guestbooking')}>
            Guest Booking
              </Button>
            <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('booking')}>
            Future Booking
              </Button>
              <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('pastbooking')}>
            Past Booking
              </Button>
              <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('review')}>
            Review
              </Button>
              <Button variant="outline-secondary" size="lg" className="no-outline" onClick={() => handleSectionChange('analyze')}>
            Save
              </Button>
            </div>
          </div>
            {profile ? (
             <div className='MainSection container-scroll'>
              {activeState === 'guestbooking' && <GuestBooking /> }
              {activeState === 'listing' && <ListingSec listing={profile.listing} />}
              {activeState === 'booking' && <BookingSec booking={profile.bookings}/>}
              {activeState === 'pastbooking' && <PastBooking booking={profile.bookings}/>}
              {activeState === 'review' && <ReviewSec review={profile.reviewsGiven}/>}
              {activeState === 'analyze' && <AnalyzeSec profile={profile}/>}
              </div>
            ):(
              <div className='MainSection'>
                <p>Loading</p>
              </div>
            ) }
     
       
        </>
   
    </div>
  );
}

export default Profile
