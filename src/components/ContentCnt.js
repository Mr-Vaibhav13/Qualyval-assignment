import React, { useEffect, useState } from 'react'
import userIcon from "../images/profileIcon.jpg"
import data from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import EditUser from './EditUser'

const ContentCnt = () => {
  
  const [dataInfo, setDataInfo] = useState([])
  const dispatch = useDispatch();
  const users = useSelector((store)=> store.user)
  const [editIndex, setEditIndex] = useState(null)

  const [edit, setEdit] = useState(false)


  useEffect(()=>{
    if (users.length === 0) {
      dispatch(addUser(data));
    }

    else{
      setDataInfo(users)
    }
  },[dispatch, users])

  
  // console.log(dataInfo)

  

  const handleDeleteUser= (index) =>{
    const filterDataInfo= dataInfo.filter((_, i)=> i!==index)
    setDataInfo(filterDataInfo)
  }

  const handleEditUser = (index) =>{
    setEditIndex(index)
    setEdit(true)
  }

  const handleCloseEdit = ()=>{
    setEdit(false)
    setEditIndex(null)
  }


  return (
    <>

    {edit && <EditUser handleCloseEdit={handleCloseEdit} index={editIndex}/>} 
     
    {dataInfo && dataInfo.length>0 ? dataInfo.map((val, index)=>
      <div key={index} className='pl-6 border-b-slate-600 border-b-[1px] py-5 flex'>
    <input type='checkbox' className=''/>

    <div className='flex space-x-5'>
      
       
      {val.img? <img className='w-12 ml-8 rounded-full' 
      src={val.img}  alt='userImg'/> : 
      <img className='w-12 ml-8 rounded-full' src={userIcon} alt='profileImg' />}
      
      <div className='w-[19vw]'>
      <p className='text-white font-bold'>{val.name}</p>
      <p className='text-gray-400 text-sm'>{val.email}</p>
      </div>
      
      <p className='w-[19vw] text-white font-bold m-auto'>{val.position}</p>

      <p className='text-white w-[19vw] font-bold m-auto'>{val.country}</p>

      <div className='flex space-x-2 m-auto'>
        {
          val.status==="Yes"?<div className='mr-10 flex space-x-3'><p className='w-3 h-3 bg-green-500 rounded-lg mt-[7px]' />
        <p className='text-white font-bold'>Active</p></div>
        : <div className='mr-[2.1rem] flex space-x-3'><p className='w-3 h-3 bg-red-500 rounded-lg mt-[7px]' />
        <p className='text-white font-bold'>Offline</p></div>
        }

        
      </div>

      <div className='space-x-3'>
      <button onClick={()=>{handleEditUser(index)}} className='text-white bg-blue-700 px-4 w-32 m-auto p-3 font-semibold rounded-md text-sm'>
      ➡️ Edit User
    </button>

      </div>
      
    
    <button onClick={()=>handleDeleteUser(index)} className='text-white bg-red-700 px-4 w-32 m-auto p-3 font-semibold rounded-md text-sm'>
      🫠 Delete user
    </button>
      



    </div>
  </div>)
 : ""}
  </>
  )
  
}

export default ContentCnt