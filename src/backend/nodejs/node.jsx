
import React from 'react'
import {DATANODE} from "../../Data/nodeData"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'
import NodeComp from "./nodeCom"
export default function Php() {
  return (
    <div className='ppp'>
      <div class="ContentHome container mt-0">
                
                {
                  DATANODE.map((item)=>
                    {
                        {/* pass items as data in new componenet   */}
                        return <NodeComp data={item}  />
                    }
                    )
                }
        </div>
    </div>
  )
}

