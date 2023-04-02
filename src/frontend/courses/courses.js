import React, {useState} from "react"
import '../../home/home.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import {frontcourses} from "../../Data/coursesData"
import Mycourse from "./mycourse"
function Courses() {
    return(
        
        <div className="ppp">
            <div class="limit d-flex align-text-center ">
                <hr></hr>
                <p class='title'>Coureses</p>
                <hr></hr>
            </div>
            <div class="ContentHome container">
                
            {
                frontcourses.map((item)=>
                {
                    {/* pass items as data in new componenet   */}
                    return <Mycourse data={item}  />
                }
                )
            }
            </div>
        </div>
        
        
    )
}
export default Courses;