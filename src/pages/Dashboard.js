
import dash from "../assets/dashboardimg.svg"
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl h-screen '>
      <div>
        <img src= {dash} alt = "dashboard" height={350} width={350} />
      </div>
      <div className="mt-10" >welcome to studyNotion </div>


    </div>
  )
}

export default Dashboard