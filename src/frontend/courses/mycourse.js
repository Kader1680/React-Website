import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Mycourse({id, name}) {
    
  return (
    <div>
      <div class="courses row ">
                <div class="Feild col-lg-3">
                    <img src={html} />

                    <a href="https://www.youtube.com/watch?v=D-h8L5hgW-w">Crash Courses HTML & CSS</a>

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
