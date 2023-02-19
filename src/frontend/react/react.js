import React from "react";
import './react.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import courses from './courses.png'
import project from "./project.png"
import interview from "./interview.png"
import book from "./book.png"
export default class REACT extends React.Component{
    render(){
        return(
        <div class="container">
            <div class="row">
                <div class="box col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img src={courses} />
                    <p>Courses React js</p>
                    <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" target="_blank">Playlist In English</a><br></br>
                    <a href="https://www.youtube.com/playlist?list=PLyr3gkJ8OBxq2vDxRus1N0XHt7j6mqMkK" target="_blank">Playlist In Arabic</a><br></br>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img src={project} />
                    <p>Project React js</p>
                    <a href="https://github.com/topics/react-project">Githbub Repository</a><br></br>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img src={interview} />
                    <p>Question Interview</p>
                    <a href="https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions" target="_blank">Top 40 ReactJS Interview Questions</a><br></br>
                    <a href="https://github.com/sudheerj/reactjs-interview-questions" target="_blank">Github Question</a><br></br>
                </div>
                <div class="box col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img src={book} />
                    <p>book for more learning</p>
                    <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" target="_blank">Playlist In English</a><br></br>
                    <a href="https://www.youtube.com/playlist?list=PLyr3gkJ8OBxq2vDxRus1N0XHt7j6mqMkK" target="_blank">Playlist In Arabic</a><br></br>
                </div>
            </div>
            
            
            
        </div>
        )
    }}