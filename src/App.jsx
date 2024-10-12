import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import HOME2 from './Pages/HOME2';
import Organization from './Pages/Organization';
import SubOrganization from './Pages/SubOrganization';

function App() {
 
 
  return (
  <>
  <Routes>
<Route path='/' element={<HOME2/>}>
<Route path='/org' element={<Organization/>}></Route>
<Route path='/Sub-org' element={<SubOrganization/>}></Route>

</Route>


    {/* <Route path='/' element={<Home/>}></Route> */}
    <Route path='/login' element={<LoginPage/>}></Route>
  </Routes>

  </>
  )
}

export default App
