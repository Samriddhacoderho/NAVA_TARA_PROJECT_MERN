import React, { useEffect } from 'react'

const FetchStudents = () => {
    const adminLoggedIn=document.cookie.includes("adminToken");
    const teacherLoggedIn=document.cookie.includes("teacherToken");

    useEffect(()=>{
        const fetch_students=async()=>{
            //TODO BACKEND PARSING
        }

        fetch_students();
    },[]);
  return (
    (adminLoggedIn || teacherLoggedIn) && <div>
        {/* TODO LIST SHOWING AND SORT BUTTON */}
        {adminLoggedIn && <button>Edit</button> }
        {/* TODO BUTTON DESIGN */}
    </div>
  )
}

export default FetchStudents


