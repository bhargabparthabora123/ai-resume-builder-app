import React from 'react'
import { Loader2, PlusSquare } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function AddResume() {
    const[openDialog, setOpenDialog] = useState(false)
    const[resumeTitle, setResumeTitle] = useState()
    const {user}=useUser()
    const[loading, setLoading]=useState(false)
    const navigation=useNavigate()

    const onCreate=async()=>{
      setLoading(true)
      const uuid=uuidv4()
      
      const data={
        
              Title:resumeTitle,
              resumeId:uuid,
              UserEmail:user?.primaryEmailAddress?.emailAddress,
              UserName:user?.fullName
          
      }
   
/************ rough work for consoling the payload and debug the post request error*/
console.log('Payload being sent:', { data })

      GlobalApi.CreateNewResume({data}).then(resp=>{
        console.log(resp.data.data.documentId)
        if(resp){
          setLoading(false)
          setOpenDialog(false)

          navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit")
        }
      })
      .catch(error=>{
        console.log("error creating resume",error)
        setLoading(false)
      })
    }

  return (
    <div>

       <div className='p-14 py-24 border-1 border-gray-500 items-center flex justify-center bg-gray-200 rounded-lg h-[280px]
       hover:scale-105 transition-all hover:shadow-md shadow-gray-400
       cursor-pointer border-dashed'   
           onClick={()=> setOpenDialog(true)}
           >
         <PlusSquare/>
       </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        Add a title for your new resume
      <Input className='my-2' placeholder='eg.full-stack resume' 
      onChange={(e)=>setResumeTitle(e.target.value)}/>


      </DialogDescription>
      <div className='flex justify-end gap-2 '>
            <Button onClick={()=>setOpenDialog(false)} variant='ghost' className='border-1 border-gray-400 hover:bg-red-800 hover:text-white'>Cancel</Button>
            <Button  
              disabled={!resumeTitle || loading}
            onClick={()=>onCreate()}>
      {
        loading?
        <Loader2  className='animate-spin'/>:'Create'
      }

            </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume