
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignupForm({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [accountType , setAccountType ]= useState("student");

    const Navigate = useNavigate();

    function changeHandler(e) {
        setFormData((prevData) => ({
            ...prevData, [e.target.name]: e.target.value
        }
        ))
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("password not matched")
            return;
        }
        alert("account created succesfully")
        setIsLoggedIn(true);
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData ,
            accountType
        }

        console.log("printing final account data")
        console.log(finalData)
        Navigate('/dashboard')

    }

    return (
        <div>
            <div className="flex h-fit bg-neutral-600 p-1 gap-x-1 rounded-full max-w-max my-6">
                <button className={`${accountType === "student" ? ("bg-black text text-white") : ("bg-transparent text-neutral-500")} py-2 px-5 rounded-full transition-all duration-400`} onClick={()=>setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? ("bg-black text text-white") : ("bg-transparent text-neutral-500")} py-2 px-5 rounded-full transition-all duration-400`} onClick={()=>setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4 -mt-2">
                    <label>
                        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">First name <sup className="text-pink-500">*</sup></p>
                        <input required type="text"
                            className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  "
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter first Name"
                            value={formData.firstName}></input>
                    </label>
                    <label>
                        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">Last name <sup className="text-pink-500">*</sup></p>
                        <input required type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  "></input>
                    </label>
                </div>
                <label>
                    <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem] mt-2">Email address <sup className="text-pink-500">*</sup></p>
                    <input required type="text"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        value={formData.email}
                        className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  "></input>
                </label>
                <div className="flex gap-x-4 mt-2">
                    <label className="relative">
                        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-500">*</sup></p>
                        <input
                            className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  " required type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}></input>
                        <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24}></AiOutlineEye>) : (<AiOutlineEyeInvisible fontSize={24}></AiOutlineEyeInvisible>)}
                        </span>
                    </label>
                    <label className="relative">
                        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-500">*</sup></p>
                        <input
                            className="bg-neutral-300 rounded-[0.5rem] text-black w-full p-[12px]  " required type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm password"
                            value={formData.confirmPassword}></input>
                        <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24}></AiOutlineEye>) : (<AiOutlineEyeInvisible fontSize={24}></AiOutlineEyeInvisible>)}
                        </span>
                    </label>

                </div>
                <button className=" w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4">Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm