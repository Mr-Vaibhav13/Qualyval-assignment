import React, { useState } from 'react'
import Header from './components/Header'
import ContentCnt from './components/ContentCnt'
import AddUser from './components/AddUser';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility


  const HandleAddUser = ()=>{
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-[#1F2937] min-h-screen h-[100%] pb-8'>

      <div className='flex justify-end px-5 py-5'>
      <button onClick={HandleAddUser}
      className='text-white bg-blue-700 p-3 font-semibold rounded-md text-sm'>
        + Add User
      </button>

      {isModalOpen && <AddUser handleCloseModal={handleCloseModal} />}

      </div>


      <Header />
      <ContentCnt />
      
    </div>
  )
}

export default App