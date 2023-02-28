import React, {useState} from "react"
import "./courses.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Coursesdatafrom from "../../Data/coursesData.json"
import Mycourse from "./mycourse"
function Courses() {
    return(
        <div className="gfdgdf">
            <h2>courses herer</h2>
            {
                Coursesdatafrom.map((item)=>{
                    {/* Pass courses as data in new compenet <Mycourse /> */}
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