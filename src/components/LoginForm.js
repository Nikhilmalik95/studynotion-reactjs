
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"

function LoginForm({setIsLoggedIn}){

const[formData , setFormData] = useState({
    email:"" ,
    password:""
})
const nevigate = useNavigate();
const[showPassword , setShowPassword] = useState(false)


function changeHandler(e) {
    setFormData((prevData) =>({
        ...prevData , [e.target.name]:e.target.value}
    ))
}
function submitHandler(e){
    e.preventDefault()
    setIsLoggedIn(true);
    alert("success")
    console.log("printing the form data ")
    console.log(formData)
    nevigate("/dashboard")
}

    return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full ">
                <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-500">*</sup></p>
                <input className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  " required type="text" value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                ></input>
            </label>
            <label  className="w-full relative">
                <p  className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">Password<sup className="text-pink-500">*</sup></p>
                <input className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  " required type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                ></input>

                <span className="absolute right-3 top-[40px] cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24}></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24}></AiOutlineEye>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto" onClick={()=>alert("Service unaviable😪")}>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className="bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4">
                Sign in
            </button>
        </form>
    )
}

export default LoginForm