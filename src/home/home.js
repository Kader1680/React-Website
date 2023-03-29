import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {DATAHOME} from "../Data/dataHome"
import HomeData from "./homedata"
function Home() {


    
    return(
        <div className="ppp">
            <header class="text-center">
                <h2>Welcome to RestrettoCode</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                <div className="search">
                    <input placeholder="Search " ></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    
                </div>
            </header>
            <div class="limit d-flex align-text-center ">
                <hr></hr>
                <p class='title'>Coureses</p>
                <hr></hr>
            </div>
            <div class="ContentHome container">
                
            {
                DATAHOME.map((item)=>
                {
                    {/* pass items as data in new componenet   */}
                    return <HomeData data={item}  />
                }
                )
            }
            </div>
        </div>
    )
}
export default Home;