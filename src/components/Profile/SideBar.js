import React from 'react'
import './Profile.css'
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const SideBar = ({profile}) => {
 const {username, description, occupation, image} = profile
  return (
    <div className='InSideBar'>
        <Figure>
          <Figure.Image
            className='profile-image'
            width={250}
            height={400}
            alt="171x180"
            src={image}
          />
         </Figure>
    <div className='username'>
        <h1>
            {username}
        </h1>
        <h3>
            {occupation}
        </h3>
        <p>
          {description}
        </p>
    </div>
    <Button variant="outline-secondary" size="lg">
            Edit Profile
    </Button>
    </div>
  )
}

export default SideBar