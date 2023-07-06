import signup from "../assets/signup.png"

import React from 'react'
import Templete from '../components/Templete'

const Signup = ({setIsLoggedIn}) => {
  return (
   <Templete 
   title="Join the millios learning to code with studyNotion for free"
   desc1="Build skills for today , tomorrow , and beyond"
   desc2="Education to future-proof your career."
   image={signup}
   formtype="signup"
   setIsLoggedIn={setIsLoggedIn}
   />
    )
}

export default Signup