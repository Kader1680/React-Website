import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <h4>Crash Courses HTML & CSS</h4>
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/iG2jotQo9NI"></iframe>
                    </div>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                    
                        <button class="download">Download vedio</button>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <h4>Crash Courses JavaScript</h4>
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/W6NZfCO5SIk&t=1290s"></iframe>
                    </div>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                    
                        <button class="download">Download vedio</button>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <h4>Crash Courses SCSS</h4>
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/qZXt1Aom3Cs"></iframe>
                    </div>
                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                    
                        <button class="download">Download vedio</button>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <h4>Crash Courses PHP</h4>
                    <div class="vedio">
                        <iframe src="https://www.youtube.com/embed/pszZMzI9a7A&t=3s"></iframe>
                    </div>
                    <div class="commit">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <i class="fa-regular fa-thumbs-down ms-3"></i>
                    
                        <button class="download">Download vedio</button>
                    </div>
                </div>
            </div>
    



            <div class="limit d-flex align-text-center m-auto">
                <hr></hr>
                <p class='title'>Tools</p>
                <hr></hr>
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