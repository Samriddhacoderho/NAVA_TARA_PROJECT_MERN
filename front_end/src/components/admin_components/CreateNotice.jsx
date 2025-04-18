import React from 'react'
import NoAccess from '../NoAccess'

const CreateNotice = () => {
    const adminLoggedIn=document.cookie.includes("adminToken")
  return (
    adminLoggedIn?
    <div className='h-screen flex flex-col justify-center items-center'>
      TODO
    </div>:<NoAccess></NoAccess>
  )
}

export default CreateNotice
