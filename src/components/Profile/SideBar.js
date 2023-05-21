import React from 'react'
import './Profile.css'
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

const SideBar = () => {
  return (
    <div className='InSideBar'>
        <Figure>
      <Figure.Image
        width={300}
        height={300}
        alt="171x180"
        src="https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/0620e8a0-0b5a-4991-b5e2-5277b8cc6a13.jpg?im_w=1200"
      />
    </Figure>
    <div className='username'>
    <h1>
        Jade
    </h1>
    <h2>
        Software Engineer
    </h2>
    <p>
      I like to travel and hangout with people
    </p>
    </div>
    <Button variant="outline-secondary" size="lg">
            Edit Profile
    </Button>
    </div>
  )
}

export default SideBar