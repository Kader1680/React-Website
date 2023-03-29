import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DATAHOME} from "../Data/dataHome"
import HomeData from "./homedata"
function Home() {


    
    return(
        <div className="ppp">
            <header class="text-center">
                <h2>Welcome to RestrettoCode</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <div className="search">
                    <input placeholder="Search " ></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    
                </div>
            </header>


            <div class="limit d-flex align-text-center ">
                <hr></hr>
                <p class='title'>Coureses</p>
                <hr></hr>
            </div>
            <div class="ContentHome">
                
            {
                DATAHOME.map((item)=>
                {
                    {/* pass items as data in new componenet   */}
                    return <HomeData data={item}  />
                }
                )
            }

            </div>












































































            {/* <div class="courses row ">
                <div class="Feild col-lg-3">
                    <img src={html} />

                    <a href="https://www.youtube.com/watch?v=D-h8L5hgW-w">Crash Courses HTML & CSS</a>

                    <div class="commit">
                        
                        <span class="material-symbols-outlined">thumb_up</span>
                        <span class="material-symbols-outlined">download
</span>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={angular} />

                    <a href="https://www.youtube.com/watch?v=AAu8bjj6-UI">Crash Courses Angular</a>


                    <div class="commit">
                        
                        <span class="material-symbols-outlined">thumb_up</span>
                        <span class="material-symbols-outlined">download
</span>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={js} />
                    <a href="https://www.youtube.com/watch?v=o1IaduQICO0">learn Courses JavaScript</a>


                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                        <span class="material-symbols-outlined">download
</span>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={php} />
                    <a href="https://www.youtube.com/watch?v=OB8jBvu8N34">Crash Courses PHP</a>


                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                    
                        <span class="material-symbols-outlined">download
</span>
                    </div>
                </div>
            </div>
     */}








{/* 

            <div class="limit d-flex align-text-center">
                <hr></hr>
                <p class='title'>Tools</p>
                <hr></hr>
            </div>
 */}














{/* 



            <div class="courses row">
                <div class="Feild col-lg-3">
                    <img src={apch} />
                    <a href="">Crash Courses SCSS</a>


                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                        <span class="material-symbols-outlined">download</span>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={icon} />
                    <a href="">Crash Courses SCSS</a>

                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                        <span class="material-symbols-outlined">download</span>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={api} />
                    <a href="">Crash Courses SCSS</a>
                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                         
                        <span class="material-symbols-outlined">download</span>

                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={aws} />
                    <a href="">Crash Courses SCSS</a>

                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                        <span class="material-symbols-outlined">download</span>

                    
                    </div>
                </div>
            </div>
 */}


{/* 

            <div class="limit d-flex align-text-center">
                <hr></hr>
                <p class='title'>Website</p>
                <hr></hr>
            </div>

 */}



{/* 

            <div class="courses row">
                <div class="Feild col-lg-3">
                    <img src={sqlserver} />
                
                    <a href="">SQL Server</a>


                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                        <span class="material-symbols-outlined">download</span>
                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    <img src={javaback} />
                    <a href="">Java</a>
                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                        <span class="material-symbols-outlined">download</span>
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={wbtem} />
                    <a href="">Template for Download</a>

                    <div class="commit">
                        <i class=" fa-regular fa-thumbs-up"></i>
                         
                        <span class="material-symbols-outlined">download</span>

                    
                    </div>
                </div>
                <div class="Feild col-lg-3">
                    
                    <img src={jsinfo} />
                    <a href="">JavaScript</a>

                    <div class="commit">
                        <span class="material-symbols-outlined">thumb_up</span>

                         
                        <span class="material-symbols-outlined">download</span>

                    
                    </div>
                </div>
            </div> */}

        </div>
    )
}
export default Home;