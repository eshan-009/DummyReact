import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Home = () => {

    

    const navigate = useNavigate();
    const apple = ["APPLE","MANGO","BANANA"]
  return (
    <div>
    
      {/* <Link to={`/login`}>  <button className='border border-black bg-yellow-200'>LOGIN</button></Link> */}

      <button onClick={(e)=>{
        e.preventDefault();
        navigate("/login",{state:{apple : apple}})
      }} className='border border-black bg-yellow-200'>LOGIN</button>
      WELCOME!!! HOME

      {
        apiData.map((item)=><p>{item.title}</p>)
      }
    </div>
  )
}

export default Home
