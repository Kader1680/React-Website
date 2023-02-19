import React from "react";
import './frontend.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  react from "./img/react.png";
import  bootstrap from "./img/bootstrap.png";
import  gulp from "./img/gulp.png";
import  html from "./img/html.png";
import  js from "./img/js.png";
import  ui from "./img/ui.png";
import  css from "./img/css.png";
import  vue from "./img/vue.jpg";
import  vuebg from "./img/vuebg.png";
import  testing from "./img/testing.png";
import  gfnt from "./img/gfnt.png";
import  vs from "./img/vs.png";
import  w3c from "./img/w3c.png";
import  font from "./img/font.png";
export default class Front extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row items ">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
                        <img src={react}  />
                        <h3 className="text-center"><a href="/frontend/react">React</a></h3>
                        <p><a href="https://fr.reactjs.org/" target="_blank">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <img src={bootstrap}  />
                        <h3 className="text-center">Bootstrap</h3>
                        <p><a href="https://getbootstrap.com/" target="_blank">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <img src={gulp}  />
                        <h3 className="text-center">Gulp Js</h3>
                        <p><a href="https://gulpjs.com/" target="_blank">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={css}  />
                        <h3 className="text-center">React</h3>
                        <p><a href="https://fr.reactjs.org/" target="_blank">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={vuebg}  />
                        <h3 className="text-center">Bootstrap</h3>
                        <p><a href="https://getbootstrap.com/">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <img src={testing}  />
                        <h3 className="text-center">Gulp Js</h3>
                        <p><a href="https://gulpjs.com/">Offical website</a></p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"></div>
                </div>

                {/* ----- BOOK FEILD ------ */}

                <div class="book mt-5">
                    <div className="items">
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={html}  />
                            <h4 className="text-center">HTML/CSS</h4>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={js}  />
                            <h4 className="text-center">JavaScript</h4>
                            <p><a download="mybook" href="js.pdf">Download Now</a></p>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={vue}  />
                            <h4 className="text-center">VUE Js</h4>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={ui}  />
                            <h4 className="text-center">UI UX</h4>
                            
                        </div>
                    </div>
                </div>


                {/* ----- TOOLS FEILD ------ */}


                {/* <div class="tools mt-5">
                    <div className="row">
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={font}  />
                            <div class="description">
                                <h4>font Aswomen</h4>
                                <p>lorem in husfum </p>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={vs}  />
                            <div class="description">
                                <h4>font Aswomen</h4>
                                <p>lorem in husfum </p>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={w3c}  />
                            <div class="description">
                                <h4>font Aswomen</h4>
                                <p>lorem in husfum </p>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                            <img src={gfnt}  />
                            <div class="description">
                                <h4>font Aswomen</h4>
                                <p>lorem in husfum </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
                
        

        )
    }
}