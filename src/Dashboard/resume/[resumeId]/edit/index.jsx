import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import FormSection from '../../components/FormSection'
import ResumePreview from '../../components/ResumePreview'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import dummy from '@/data/dummy.jsx'
import { useState } from 'react'
import GlobalApi from './../../../../../service/GlobalApi'
import { useContext } from 'react'


function EditResume() {
    const {resumeId}=useParams()
    const [resumeInfo,setResumeInfo]=useState()

    useEffect(()=>{
     
        GetResumeInfo()
    },[])

   const GetResumeInfo=()=>{

    GlobalApi.GetResumeById(resumeId).then(resp=>{
        console.log(resp.data.data)
        setResumeInfo(resp.data.data)
    })
   }


  return (

   <ResumeInfoContext.Provider    value={{resumeInfo,setResumeInfo}}>

<div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      
      {/* formsection */}
      <FormSection/>
      {/* preview section */}
  <ResumePreview/>

    </div>
   </ResumeInfoContext.Provider>
  )
}

export default EditResume