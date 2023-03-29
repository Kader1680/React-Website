import React from "react";
import './header.css'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, link, NavLink } from "react-router-dom";
function  Header(){


        const [ismobile, setmobile] = useState(false);
        const BarClick = () =>{
            if(ismobile){
                setmobile(false)
            }else{
                setmobile(true)
            }
        }
        // const [list, setlist] = useState(false);
        
        
        return(
                    <nav class= " d-flex pt-2 pb-2">
                        <div class="logo fw-bold">
                            
                            Restretto<span >Code</span>
                        </div>
                        

                        <div class="Ibar" onClick={BarClick} >
                        {
                            ismobile ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)
                        }
                            

                        </div>
                            <ul  className={ismobile ? 'list show' : 'list'} >
                                
                                <li class=" item">
                                    <a href="/" class="text-decoration-none">Home</a>
                                    
                                </li>
                                <li class=" item">
                                    <a href=" " class="text-decoration-none">FrontEnd</a>
                                    <i class="fa-solid fa-chevron-down ms-2"></i>
                                    <ul class="Dropdown">
                                        <li class=" it">
                                            <a href="/frontend/Courses" class="text-decoration-none">Courses</a>
                                        </li>
                                        <li class=" it">
                                            <a href="/frontend/Roadmap" class="text-decoration-none">Roadmap</a>
                                        </li>
                                        <li class=" it">
                                            <a href="/frontend/project" class="text-decoration-none">Project</a>
                                        </li>
                                        <li class=" it">
                                            <a href="/" class="text-decoration-none">Other</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class=" item">
                                    <a href="" class="text-decoration-none">BackEnd</a>
                                    <i class="fa-solid fa-chevron-down ms-2"></i>
                                    <ul class="Dropdown">
                                        <li class=" it">
                                            <a href="/backend/php" class="text-decoration-none">PHP & Laravel</a>
                                        </li>
                                        <li class=" it">
                                            <a  href="/backendd/nodejs" class="text-decoration-none">Node js </a>
                                        </li>
                                        <li class=" it">
                                            <a href="/backendd/python" class="text-decoration-none">Django & Flask</a>
                                        </li>
                                        <li class=" it">
                                            <a href="/backendd/database" class="text-decoration-none">DataBase</a>
                                        </li>
                                    </ul>
                                </li>
                        
                                <li class=" item">
                                    <i class="fa-regular fa-heart"></i>
                                </li>
                                <li class=" item">
                                    <a href="/sign" class=" text-decoration-none"><i class="fa-solid fa-right-to-bracket"></i></a>
                                </li>
                                
                            </ul>
                        
                    </nav>

        )
}
export default Header