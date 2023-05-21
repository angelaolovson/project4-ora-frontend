import React, {useEffect, useContext, useState} from 'react';
import { AuthContext } from '../context/auth-context';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import SideBar from '../components/Profile/SideBar';
import './Profile.css';
import ListingSec from '../components/Profile/ListingSec';


const Profile = () => {
  //use authContext to grab id
  const auth = useContext(AuthContext);
  //profile state
  const [profile,setProfile] = useState(null);
 console.log("🤓",auth.userId)
  useEffect(() => {
  
    const profileFetch = async() =>{
      try{
        if(auth.userId){
          const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const responseData = await fetch(
            `http://localhost:4000/user/${auth.userId}`,options
          );
        
          const profileData = await responseData.json();
          setProfile(profileData);
          console.log(profileData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    profileFetch();
  }, [])
 

  return (
    <div className='dashboard'>
  
        <>
          <div className='SideBar'>
            <SideBar />
          </div>
          <div className='ButtonBar'>
            <div className = 'button-container'>
              <Button variant="outline-secondary" size="lg">
            Property
            </Button>
            <Button variant="outline-secondary" size="lg">
            Booking
              </Button>
              <Button variant="outline-secondary" size="lg">
            Reviews
              </Button>
              <Button variant="outline-secondary" size="lg">
            Analyze
              </Button>
            </div>
          </div>
          <div className='MainSection'>
            <ListingSec />
          </div>
        </>
   
    </div>
  );
}

export default Profile
