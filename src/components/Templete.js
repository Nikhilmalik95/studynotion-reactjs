
import loginbackground from '../assets/loginbackground.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"

function Templete({title , desc1 , desc2 , image , formtype , setIsLoggedIn}){
return(
    <div className='flex w-11/12 justify-between 
     max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 min-h-fit'>
        <div className='w-11/12 max-w-[450px] mx-0'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='flex flex-col text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-white '>{desc1}</span>
                <span className='text-blue-400 italic'>{desc2}</span>
            </p>
            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) :
             (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

             <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-white'></div>
                <p className='text-white font-medium leading-[1.37rem]'>OR</p>
                <div className='w-full h-[1px] bg-white'></div>
   
             </div>
             <div className='bg-neutral-900'>
             <button 
             onClick={()=>alert("Google glich 👻")}
             className='w-full flex justify-center items-center border rounded-[8px] font-medium text-white  px-[12px] py-[8px] gap-x-2 mt-6 border-white		'>
                <FcGoogle/>
                <p >Sign Up with Google</p>
             </button>
             </div>
        </div>
        <div className='relative w-11/12 max-w-[450px] invisible sm:invisible  md:visible lg:visible'>
            <img src={loginbackground} alt='pattern' width={458} height={404} loading='lazy'></img>
            <img 
            className='absolute -top-3 right-3' src={image} alt='students' width={458} height={390} loading='lazy'></img>

        </div>
    </div>
)

}

export default Templete;