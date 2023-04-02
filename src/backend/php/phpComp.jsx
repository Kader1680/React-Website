import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'

export default function PhpComp(props) {
    const {id, title, img }= props.data

    const [color, setcolor] = useState(false);
    const Color = () =>{
      setcolor(!color)
    }
  return (
    <div class="Feild col-lg-3 text-center mt-3">
        <img src={img} />
        <p>{title}</p>
        <div class="commit d-flex text-center justify-content-around text-white">
            <a href="https://www.youtube.com/watch?v=AAu8bjj6-UI">Go It</a>
            <i class={`fa-solid fa-thumbs-up ${(color === true ? "green" : "")}`} onClick={Color}></i>
            <span class="material-symbols-outlined">download</span>
        </div>
    </div>
  )
}
