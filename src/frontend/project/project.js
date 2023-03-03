import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProjectData} from "../../Data/projectData"
import "./project.css"
export default function Project() {
  return (
    <div class='pt-5 text-white projectsection d-grid'>
      {
        ProjectData.map((item)=>{
            return(
                <div key={item} class="project">
                    <img src={item.img}/>
                    <h6>{item.Name}</h6>
                    <p>{item.skill}</p>
                </div>
            )
        })
      }
    </div>
  )
}
