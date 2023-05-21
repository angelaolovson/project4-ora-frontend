import React, {useEffect, useContext, useState} from 'react';
import { AuthContext } from '../context/auth-context';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';


const Profile = () => {
  //use authContext to grab id
  const auth = useContext(AuthContext);
  //profile state
  const [profile,setProfile] = useState(null);
 console.log(auth.userId)
  useEffect(() => {
  
    const profileFetch = async() =>{
      try{
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
      } catch (error) {
        console.log(error);
      }
    }
    profileFetch();
  }, [])
 

  return (
    <div>
      {profile? 
      (    <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>{profile.username}</Col>
          <Col>{profile.email}</Col>
        </Row>
        <Row>
          <Col>{profile.description}</Col>
          <Col xs={5}><Image src={profile.image} alt="Image" fluid /></Col>
          <Col>{profile.occupation}</Col>
          <Col>{profile.reviewsGiven}</Col>
        </Row>
      </Container>
      
      ):(
        <p>Loading profile...</p>
      )}
    </div>
  )
}

export default Profile
