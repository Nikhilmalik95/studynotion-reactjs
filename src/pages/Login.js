import Templete from "../components/Templete";
import logingirl from "../assets/logingirl.png"


function Login({setIsLoggedIn}){

  return(
    <Templete 
     title="welcome Back"
     desc1 = " Build skills for today, tomorrow and beyond"
     desc2="Education to future-proof your career"
     image={logingirl}
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}
    />
  )

}

export default Login;