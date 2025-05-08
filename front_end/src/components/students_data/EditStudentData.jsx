import React from 'react'
import { useLocation } from 'react-router-dom'
import NoAccess from '../NoAccess';

const EditStudentData = () => {
    const location=useLocation();
  return (
    location.state?<div>
        {console.log(location.state.student)}
    </div>:<NoAccess/>
  )
}
export default EditStudentData
