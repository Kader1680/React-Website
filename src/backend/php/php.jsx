import React from 'react'
import {DATAPHP} from "./phpData"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'
import PhpComp from "./phpComp"
export default function Php() {
  return (
    <div className='ppp'>
      <div class="ContentHome container mt-0">
                
                {
                  DATAPHP.map((item)=>
                    {
                        {/* pass items as data in new componenet   */}
                        return <PhpComp data={item}  />
                    }
                    )
                }
        </div>
    </div>
  )
}
