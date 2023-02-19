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
                            
                            Restretto<span >Programming</span>
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
                                    <a href="/frontend" class="text-decoration-none">FrontEnd</a>
                                </li>
                                <li class=" item">
                                    <a href="/backend" class="text-decoration-none">BackEnd</a>
                                </li>
                                <li class=" item">
                                    <a href="#" class=" text-decoration-none">Sign in</a>
                                </li>
                                
                            </ul>
                        
                    </nav>

        )
}
export default Header