import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../home/home.css'

export default function NodeComp(props) {
    const {id, title, img }= props.data

  return (
    <div class="Feild col-lg-3">
        <img src={img} />
        <a className=' text-white' href="https://www.youtube.com/watch?v=AAu8bjj6-UI">{title}</a>
        <div class="commit">
            <span class="material-symbols-outlined">thumb_up</span>
            <span class="material-symbols-outlined">download</span>
        </div>
    </div>
  )
}
