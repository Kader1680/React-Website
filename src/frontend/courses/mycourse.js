import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mycourses.css";

function Mycourse({id, name, img}) {
    
  return (
    <div class="courses">
          <div class="myfield">
              <p>{name}</p>
              <img src ={img} />
              <div class="commit">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <i class="fa-solid fa-download"></i>
              </div>
          </div>
    </div>
  )
}
export default Mycourse;
