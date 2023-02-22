import React, {useState} from "react"
import "./sign_in.css"

function SignIn() {

    const [login, setlogin] = useState(false);
    function Loign() {
        setlogin(true)
    }
    return(
        <div class="myform">
            <div class ="choise">
                <ul class=" list-unstyled">
                    <li>Sign Up </li>
                    <li onClick={Loign}>Login</li>
                </ul>
            </div>
            <h6>Sign Up for free</h6>
            <form class="Sign_Up">
                <div>
                    <input placeholder="name"></input>
                    <input placeholder="last name"></input>
                </div>
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Get Started</button>
            </form>
            <form class={login}>
                
                <input class="email" placeholder="email"></input>
                <input class="password" placeholder="password"></input>
                <button>Submit</button>
            </form>
            
            
            
        </div>
        
    )
}

export default SignIn;