import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
function Header() {
  const {user,isLoaded,isSignedIn}=useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
     <Link to={"/"}>
     <img src="/logo.svg" width={100} height={100} alt="" />
     </Link> 
      {
        isSignedIn ? (
          <div className='flex gap-2 items-center' >
            <Link to={'/dashboard'}>
            <Button variant='outline'>Dashboard</Button>
            </Link>
              
              <UserButton/>

          </div>
        ) : (
          <Link to={'/auth/sign-in'}>
          <Button>Get Started</Button>
          </Link>
        )
      }
  
      

    </div>
  )
}

export default Header