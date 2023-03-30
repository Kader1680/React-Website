import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
export default function HomeData(props) {
    const {id, title, img }= props.data

    const [color, setcolor] = useState(false);
    const Color = () =>{
      setcolor(!color)
    }
  return (
    
    <div class="Feild col-lg-3">
        <img src={img} />
        <a href="https://www.youtube.com/watch?v=AAu8bjj6-UI">{title}</a>
        <div class="commit">
            {/* <i class="fa-solid fa-thumbs-up" onClick={Color}></i> */}
            <i class={`fa-solid fa-thumbs-up ${(color === true ? "green" : "")}`} onClick={Color}></i>
            <span class="material-symbols-outlined">download</span>
        </div>
    </div>
  )
}
