import React from "react";
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, link, NavLink } from "react-router-dom";
export default class Header extends React.Component{
    render(){
        return(
                    <nav class=" d-flex justify-content-around pt-2 pb-2">
                        <div class="logo fw-bold">
                            Restretto<span >Programming</span>
                        </div>
                        
                            <ul class="mt-2 mb-2">
                                <li>
                                    <a href="/" class="text-black text-decoration-none">Home</a>
                                </li>
                                <li>
                                    <a href="/frontend" class="text-black text-decoration-none">FrontEnd</a>
                                </li>
                                <li>
                                    <a href="/backend" class="text-black text-decoration-none">BackEnd</a>
                                </li>
                                <li>
                                    <a href="#" class="text-black text-decoration-none">Sign in</a>
                                </li>
                                
                            </ul>
                        
                    </nav>

        )
    }
}