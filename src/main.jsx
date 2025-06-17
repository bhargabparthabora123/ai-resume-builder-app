import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import SignInPage from './auth/sign-in/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Home from './Home/index.jsx'
import Dashboard from './Dashboard/index.jsx'

import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './Dashboard/resume/[resumeId]/edit'
import ViewResume from './my-resume/[resumeId]/view'
import './index.css'



// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
    {
     
     element: <App/>,
     children:[
     
      {
        path: '/dashboard' ,
        element: <Dashboard />
      },
      {
        path: '/dashboard/resume/:resumeId/edit' ,
        element: <EditResume />
      }
     ] 
    } ,   
    {
      path: '/' ,
      element: <Home />
    },
  {
        path: '/auth/sign-in' ,
        element: <SignInPage />
          },

          {
            path:'/my-resume/:resumeId/view',
            element:<ViewResume/>
          }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router={router}/>
     </ClerkProvider>
 
  </React.StrictMode>,
)
