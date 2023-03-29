import React from 'react'
import {DATAHOME} from "../../Data/nodeData"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'
import NodeComp from "./nodeCom"
export default function Node() {
  return (
    <div class="ContentHome container mt-0">
                
    {
        DATAHOME.map((item)=>
        {
            {/* pass items as data in new componenet   */}
            return <NodeComp data={item}  />
        }
        )
    }
    </div>
  )
}
