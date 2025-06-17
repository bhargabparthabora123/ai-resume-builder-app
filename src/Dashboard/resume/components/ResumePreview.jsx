import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import { useState } from 'react'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'


function ResumePreview() {

      const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    // <div className=' shadow-lg h-full  p-14 border-t-[20px]' style={{
    //     borderColor: resumeInfo?.themeColor }}>
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{
  borderColor: '#EF4444'  // hardcoded Tailwind red-500
}}>
        
    {/* personal detail */}
     <PersonalDetailPreview  resumeInfo={resumeInfo}/>
   {/* summary */}
   <SummaryPreview resumeInfo={resumeInfo}/>


   {/* professional experience */}
    <ExperiencePreview resumeInfo={resumeInfo}/>
   {/* educational details */}
  <EducationalPreview resumeInfo={resumeInfo}/>
   {/* skills */}

   <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview