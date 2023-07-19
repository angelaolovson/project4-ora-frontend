import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/auth-context';


const DeleteSaved = ({id}) => {
    const auth = useContext(AuthContext);

    const deleteSaveListing = async(event) =>{
        event.preventDefault();

        try{
       
          const options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${auth.token}`
            },
           };
           //const response = await fetch(`http://localhost:4000/listing/${id}/save`, options)
           const response = await fetch(`https://airbnb-main.onrender.com/listing/${id}/save`, options)
          if(response.ok){
             window.location.reload();
          }
        } catch (error){
          console.log(error)
        }
      }
  return (
   <Button variant="danger" onClick={deleteSaveListing} >Delete</Button>
  )
}

export default DeleteSaved