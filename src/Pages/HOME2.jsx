import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HOME2 = () => {
  return (
    <div className='border border-red-800 h-screen flex flex-col'>
        <div>
            Apple
        </div>
     <div className='border border-red-800 h-screen flex'>
     <div className='p-6 border border-black w-[20vw]'>
     <ul className='flex flex-col gap-4'>
        <li>DashBoard</li>
     <Link to={`/org`}>   <li>Organization</li></Link>
        <Link to={`/Sub-org`}><li>SubOrganization</li></Link>
        <li>Employee</li>
     </ul>
     </div>

     <div className='border-2 border-red-400 w-[80vw]'>
        <Outlet></Outlet>
     </div>
     </div>
    </div>
  )
}

export default HOME2
