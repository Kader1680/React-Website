import React, {useState} from "react"
import "./sign_in.css"

function SignIn() {

    const [login, setlogin] = useState("logNon");
    const [sign, nonsign] = useState(true);
    function Sign() {
        nonsign(false)
        
    }
    function Loign() {
        setlogin("login")
        // if(login == false){
        //     setlogin(true)
            
        // }
        // }else{
        //     setlogin(false)
        // }
    }
    return(
        <div class="myform">
            <div class ="choise">
                <ul class=" list-unstyled">
                    <li onClick={Loign}>Sign Up </li>
                    <li onClick={Loign}>Login</li>
                </ul>
            </div>
            
            <form class={ sign ? 'Sign_Up' : "" }>
                <h6>Sign Up for free</h6>
                <div>
                    <input placeholder="name"></input>
                    <input placeholder="last name"></input>
                </div>
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Get Started</button>
            </form>
            
            <form class={login}>
            <h6>LOGIN FOR FREE</h6>
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Submit</button>
            </form>
            
            
            
        </div>
        
    )
}

export default SignIn;