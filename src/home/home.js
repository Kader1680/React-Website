import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import apch from "../img/apch.png"
import aws from "../img/aws.png"
import icon from "../img/icon.png"
import reqbin from "../img/reqbin.png"
function Home() {
    return(
        <div className="ppp">
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
                <p class='title'>Articles</p>
                <hr></hr>
            </div>
        </div>
    )
}
export default Home;