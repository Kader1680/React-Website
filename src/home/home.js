import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import apch from "../img/apch.png"
import aws from "../img/aws.png"
import icon from "../img/icon.png"
import javaback from "../img/javaback.png"
import reqbin from "../img/reqbin.png"
import jsinfo from "../img/jsinfo.png"
import sqlserver from "../img/sqlserver.png"
import wbtem from "../img/wbtem.png"
function Home() {
    return(
        <div className="ppp">
            <header class="text-center">
                <h2>Welcome to RestrettoCode</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <div className="search">
                    <input placeholder="Search " ></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
                </div>
            </header>

            <div class="limit d-flex align-text-center m-auto">
                <hr></hr>
                <p class='title'>Coureses</p>
                <hr></hr>
            </div>
            
            <div class="courses row">
                <div class="Feild col-lg-3">
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/iG2jotQo9NI"></iframe>
                    </div>
                    <h4>Crash Courses HTML & CSS</h4>

                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-download"></i>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/W6NZfCO5SIk&t=1290s"></iframe>
                    </div>
                    <h4>Crash Courses JavaScript</h4>

                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-download"></i>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/qZXt1Aom3Cs"></iframe>
                    </div>
                    <h4>Crash Courses SCSS</h4>

                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-download"></i>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/pszZMzI9a7A&t=3s"></iframe>
                    </div>
                    <h4>Crash Courses PHP</h4>

                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                    
                        <i class="fa-solid fa-download"></i>
                    </div>
                </div>
            </div>
    



            <div class="limit d-flex align-text-center m-auto">
                <hr></hr>
                <p class='title'>Tools</p>
                <hr></hr>
            </div>



















            <div class="courses row">
                <div class="Feild col-lg-3">
                    <img src={apch} />
                    <h4>font aswomn</h4>

                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={icon} />
                    <h4>Crash Courses JavaScript</h4>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={reqbin} />
                    <h4>Crash Courses SCSS</h4>
                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={aws} />
                    <h4>Crash Courses PHP</h4>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    
                    </div>
                </div>
            </div>





            <div class="limit d-flex align-text-center m-auto">
                <hr></hr>
                <p class='title'>Website</p>
                <hr></hr>
            </div>


            <div class="courses row">
                <div class="Feild col-lg-3">
                    <img src={sqlserver} />
                    <h4>font aswomn</h4>

                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={javaback} />
                    <h4>Crash Courses JavaScript</h4>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={wbtem} />
                    <h4>Crash Courses SCSS</h4>
                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={jsinfo} />
                    <h4>Crash Courses PHP</h4>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Home;