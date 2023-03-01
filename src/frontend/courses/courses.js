import React, {useState} from "react"
import "./courses.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {frontcourses} from "../../Data/coursesData"
import Mycourse from "./mycourse"
function Courses() {
    return(
        <div className="gfdgdf">
            <h2>courses herer</h2>
            {
                frontcourses.map((item)=>{
                    return(
                        <div key={item.id}>
                        <Mycourse {...item} />
                    </div>
                    )

                })
            }
        </div>
    )
}
export default Courses;