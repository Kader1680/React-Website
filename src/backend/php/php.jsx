import React from 'react'
import {DATAHOME} from "../../Data/backendData"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'
import PhpComp from "./phpComp"
export default function Php() {
  return (
    <div class="ContentHome container">
                
    {
        DATAHOME.map((item)=>
        {
            {/* pass items as data in new componenet   */}
            return <PhpComp data={item}  />
        }
        )
    }
    </div>
  )
}
