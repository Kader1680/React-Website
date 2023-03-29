import React from "react";
import './header.css'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function  Header(){


        const [ismobile, setmobile] = useState(false);
        const BarClick = () =>{
            if(ismobile){
                setmobile(false)
            }else{
                setmobile(true)
            }
        }
        
        
        
        return(
            // <Navbar expand="lg">
            //     <Container class="nav" >
            //         <Navbar.Brand href="#home">ResttretoCode</Navbar.Brand>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="me-auto">
            //             <Nav.Link href="/">Home</Nav.Link>

            //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            
            //                 <NavDropdown.Item href="/frontend/Courses">Courses</NavDropdown.Item>
            //                 <NavDropdown.Item href="/frontend/Roadmap">Project</NavDropdown.Item>
            //                 <NavDropdown.Item href="/frontend/project">Roadmap</NavDropdown.Item>
            //             </NavDropdown>


            //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            //                 <NavDropdown.Item href="/backend/php">Php & Laravel</NavDropdown.Item>
            //                 <NavDropdown.Item href="/backend/nodejs">Node & Express</NavDropdown.Item>
            //                 <NavDropdown.Item href="#action/3.3">Roadmap</NavDropdown.Item>
            //             </NavDropdown>


            //             <Nav.Link href="#link"><i class="fa-regular fa-heart"></i></Nav.Link>
            //             <Nav.Link href="#link"><i class="fa-solid fa-arrow-right-to-bracket"></i></Nav.Link>

            //         </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>

                    <nav class= " d-flex pt-2 pb-2">
                        <div class="logo fw-bold">
                            
                            Restrethref<span >Code</span>
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
                                            <a  href="/backend/nodejs" class="text-decoration-none">Node js </a>
                                        </li>
                                    </ul>
                                </li>
                        
                                <li class=" item">
                                    <i class="fa-regular fa-heart"></i>
                                </li>
                                <li class=" item">

                                    <a href="/sign" class=" text-decoration-none"><span class="material-symbols-outlined">login</span></a>

                                </li>
                                
                            </ul>
                            
                    </nav>
            

            // <nav class= " d-flex pt-2 pb-2">
            // <a href="/sign" class=" text-decoration-none"><i class="fa-solid fa-right-href-bracket"></i>gg</a>
            //             <div class="logo fw-bold">
                            
            //                 Restrethref<span >Code</span>
            //             </div>
                        

            //             <div class="Ibar" onClick={BarClick} >
            //             {
            //                 ismobile ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)
            //             }
                            

            //             </div>
            //                 <ul  className={ismobile ? 'list show' : 'list'} >
                                
            //                     <li class=" item">
            //                         <a href="/" class="text-decoration-none">Home</a>
                                    
            //                     </li>
            //                     <li class=" item">
            //                         <a href=" " class="text-decoration-none">FrontEnd</a>
            //                         <i class="fa-solid fa-chevron-down ms-2"></i>
            //                         <ul class="Dropdown">
            //                             <li class=" it">
            //                                 <a href="/frontend/Courses" class="text-decoration-none">Courses</a>
            //                             </li>
            //                             <li class=" it">
            //                                 <a href="/frontend/Roadmap" class="text-decoration-none">Roadmap</a>
            //                             </li>
            //                             <li class=" it">
            //                                 <a href="/frontend/project" class="text-decoration-none">Project</a>
            //                             </li>
                                        
            //                         </ul>
            //                     </li>
            //                     <li class=" item">
            //                         <a href="" class="text-decoration-none">BackEnd</a>
            //                         <i class="fa-solid fa-chevron-down ms-2"></i>
            //                         <ul class="Dropdown">
            //                             <li class=" it">
            //                                 <a href="/backend/php" class="text-decoration-none">PHP & Laravel</a>
            //                             </li>
            //                             <li class=" it">
            //                                 <a  href="/backend/nodejs" class="text-decoration-none">Node js </a>
            //                             </li>
            //                         </ul>
            //                     </li>
                        
            //                     <li class=" item">
            //                         <i class="fa-regular fa-heart"></i>
            //                     </li>
            //                     <li class=" item">
            //                         <a href="/sign" class=" text-decoration-none"><i class="fa-solid fa-right-href-bracket"></i></a>
            //                     </li>
                                
            //                 </ul>
                            
            //         </nav>

        )
}
export default Header