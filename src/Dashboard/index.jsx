import React, { use } from 'react'
import AddResume from './components/AddResume'
import GlobalApi from './../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useState } from 'react'
import ResumeCardItem from './components/ResumeCardItem'

function Dashboard() {
  const {user}=useUser()
   const [resumeList,setResumeList]=useState([])

  useEffect(()=>{
    user && GetResumesList()
  },[user])

  
  


/***
 * used to get user's resume list
 */

  const GetResumesList=()=>{
      GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp=>{
        setResumeList(resp.data.data)
      })

  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>Start creating AI resume to your next Job</p>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
  <AddResume/>
  { 
    resumeList.length>0 && resumeList.map((resume, index) => (
      <ResumeCardItem resume={resume} key={index}  refreshData={GetResumesList} />
    ))
  }
</div>
    </div>
  )
}

export default Dashboard