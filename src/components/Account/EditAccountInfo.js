import React, { useContext, useState } from 'react'
import './EditAccountInfo.css'
import { AuthContext } from '../../context/auth-context'

function EditAccountInfo() {
	const auth = useContext(AuthContext)

	//userData
	const[firstNameState, setFirstNameState] = useState('')
	const[lastNameState, setLastNameState] = useState('')
	const[phoneNumberState, setPhoneNumberState] = useState('')
	const[emailState, setEmailState] = useState('')


    return (
		<div className="editaccountinfo">
					  
		</div>
	)
}
		  
export default EditAccountInfo
		  