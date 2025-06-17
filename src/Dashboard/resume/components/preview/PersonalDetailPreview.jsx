import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'
            style={{
                color:'#EF4444' 
            }}
        >{resumeInfo?.firstName}  {resumeInfo?.lastName}</h2>
        <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
        <h2 className='text-center font-normal text-xs'
        
           style={{
      color:'#EF4444' 
           }}   
        >{resumeInfo?.address}</h2>

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs'
            style={{
                color:'#EF4444' 
            }}
            >{resumeInfo?.phone}</h2>
            <h2 className='font-normal text-xs'
            style={{
                color:'#EF4444' 
            }}>{resumeInfo?.email}</h2>
        </div>
       <hr  className='border-[2px] my-2'
          style={{
            borderColor:'#EF4444' 
          }}
       />
    </div>
  )
}

export default PersonalDetailPreview