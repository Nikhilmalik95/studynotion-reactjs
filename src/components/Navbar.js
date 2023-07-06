import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"

function Navbar (props){
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
            <Link to ="/" >
                <img  src = {logo} alt="logo" width={160} height ={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-x-6  text-white invisible md:visible">
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/">About</Link>
                    </li>
                    <li>
                        <Link to = "/">Content</Link>
                    </li>
                </ul>
            </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className="flex items-center gap-x-4 "> 
            {!isLoggedIn &&
                <Link to = "/login">
                    <button className="bg-neutral-600	 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-black">
                        Login
                    </button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to = "/signup">
                    <button className="bg-neutral-600	 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-black 	" >
                        Signup
                    </button>
                </Link>
            }
            {isLoggedIn &&
                <Link to = "/">
                    <button className="bg-neutral-600	 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-black	" onClick={() => {
                        setIsLoggedIn(false);
                        alert("Logged out")
                    } }>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to = "/dashboard">
                    <button className="bg-neutral-600	 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-black	">
                        Dashboard
                    </button>
                </Link>
            }
        </div>

        </div>
    )

}

export default Navbar;