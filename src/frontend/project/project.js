import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProjectData} from "../../Data/projectData"
export default function Project() {
  return (
    <div class='pt-5 text-white'>
      {
        ProjectData.map((item)=>{
            return(
                <div key={item} class="text-white">
                    <p>{item.id}</p>
                    <p>{item.Name}</p>
                    <p>{item.skill}</p>
                </div>
            )
        })
      }
    </div>
  )
}
