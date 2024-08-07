import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const AddUser = ({handleCloseModal}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [country, setcountry] = useState('');
    
    const dispatch = useDispatch()
     
    const handleAddUser=()=>{

          const disData = [{
            name: firstName + " " + lastName,
            email,
            position: department,
            country,
            status: "Yes"
          }]

          dispatch(addUser(disData))

          setFirstName('');
          setLastName('');
          setEmail('');
          setPhoneNumber('');
          setDepartment('');
          setcountry('');
      
          handleCloseModal();
    }

  return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center bg-[#23355e] bg-opacity-70 z-50">
          <div className="bg-gray-800 p-10 rounded-lg space-y-5">
            <div className="flex justify-between  items-center">
              <h2 className="text-white text-2xl mb-6 font-bold">Add new user</h2>
              <button onClick={handleCloseModal} className="text-white">X</button>
            </div>
            <div className="grid grid-cols-2 gap-10">
            <input type="text"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input type="text"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
            
            <input type="email"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="number"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input type="text"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input type="text"
            className="p-2 rounded bg-gray-700 text-white"
            placeholder="country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          /> 

            </div>
            <button onClick={handleAddUser} className="mt-4 p-2 w-[20%] bg-blue-700 rounded text-white">Add user</button>
          </div>
        </div>
    </div>
  )
}

export default AddUser