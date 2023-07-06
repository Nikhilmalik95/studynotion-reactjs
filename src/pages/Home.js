import Homeimg from "../assets/Homeimg.png"
import welcome from "../assets/welcome.svg"
import React from 'react'

const Home = ({ isLoggedIn }) => {
  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl h-screen '>
      <div>{
          isLoggedIn ? (<div><img src={welcome} alt="welcome" height={350} width={350}/></div>) :  (<div><img src={Homeimg} alt="homeimge" height={500} width={500}/></div>)
        }
        
      </div>
      
      <div className="mt-10">
      {isLoggedIn ? "Home" : "Go to login page"}
    </div>

    </div>
  )
}

export default Home