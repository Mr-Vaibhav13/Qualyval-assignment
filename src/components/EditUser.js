import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from '../utils/userSlice';

const EditUser = ({handleCloseEdit, index}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [country, setcountry] = useState('');
    const [pwd, setPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');

    const dispatch = useDispatch()


    const handleAddUser=()=>{
        const updatedUser = {
            ...(firstName && { name: firstName + ' ' + lastName }),
            ...(email && { email }),
            ...(phoneNumber && { phoneNumber }),
            ...(department && { position: department }),
            ...(country && { country }),
            status: "Yes",
          };

          dispatch(updateUser({index, updateUser: updatedUser}))


          setFirstName('');
          setLastName('');
          setEmail('');
          setPhoneNumber('');
          setDepartment('');
          setcountry('');
          setNewPwd('')
          setPwd('')
        
      
          handleCloseEdit();
    }

  return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center bg-[#23355e] bg-opacity-70 z-50">
          <div className="bg-gray-800 p-10 rounded-lg space-y-5">
            <div className="flex justify-between  items-center">
              <h2 className="text-white text-2xl mb-6 font-bold">Edit user</h2>
              <button onClick={handleCloseEdit} className="text-white">X</button>
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

            <input
            type='password'
            className="p-2 rounded bg-gray-700 text-white mb-8"
            placeholder="Current Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <input
            type='password'
            className="p-2 rounded bg-gray-700 text-white mb-8"
            placeholder="New Password"
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
          />

            </div>
            <button onClick={handleAddUser} className="mt-4 p-2 w-[20%] bg-blue-700 rounded text-white">Save all</button>
          </div>
        </div>
    </div>
  )
}

export default EditUser