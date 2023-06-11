import React from "react";
import './header.css'
import { useState } from "react";
import logo from "../img/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function  Header(){
        const [list, setlist] = useState(false);
        const List = () => {
            setlist(!list)
        }
return(
        <nav >
            <div class="logo">
                <img src={logo} />
            </div>
            <ul class={`list ${(list ? "block" : "")}`}>
                <li><Link to="/">Home</Link></li>
                <li>
                    FrontEnd
                    <ul class="sublist">
                        <li><Link to="/frontend/Courses">courses</Link></li>
                        <li><Link to="/frontend/Roadmap">roadmap</Link></li>
                        <li><Link to="/frontend/project">project</Link></li>
                    </ul>
                </li>
                <li>
                        BackEnd
                    <ul class="sublist">
                        <li><Link to="/backend/php" >Php & Laravel</Link></li>
                        <li><Link to="/backend/nodejs" >Nodejs & Express</Link></li>
                        <li><Link to="/">project</Link></li>
                    </ul>
                </li>
                <li><a><i class="fa-regular fa-heart"></i></a></li>
                <li><Link to="/sign"><span class="material-symbols-outlined">login</span></Link></li>
            </ul>
            <div class="iconlist">
                <i onClick={List} class={`fa-solid ${(list ? "fa-x" : "fa-bars")}`}></i>
            </div>
        </nav>
        )
}
export default Header