import React, {useState} from "react"
import "./sign_in.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {

    const [login, setlogin] = useState(false);
    const [sign, nonsign] = useState(true);
    function Sign() {
        nonsign(true)
        
    }
    function Loign() {
        setlogin(true)
        nonsign(false)
    }
    return(
        <div class="myform">
            <div class ="choise">
                <ul class=" ">
                    <li onClick={Sign}>Sign Up </li>
                    <li onClick={Loign}>Login</li>
                </ul>
            </div>
            
            <form class={ sign ? 'Sign_Up' : "SignNon" }>
                <h6>Sign Up for free</h6>
                <div class="personel">
                    <input placeholder="name"></input>
                    <input placeholder="last name"></input>
                </div>
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Get Started</button>
            </form>
            
            <form class={login ? 'login' : 'logNon'}>
            <h6>LOGIN FOR FREE</h6>
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Submit</button>
            </form>
            
            
            
        </div>
        
    )
}

export default SignIn;