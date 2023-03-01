import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Mycourse({id, name, img}) {
    
  return (
    <div>
      <div class="courses">
            <div class="Feild">
              <h2>{name}</h2>
                <img src ={img} />
                <div class="commit">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <i class="fa-solid fa-download"></i>
                </div>
            </div>
      </div>
    </div>
  )
}
export default Mycourse;
