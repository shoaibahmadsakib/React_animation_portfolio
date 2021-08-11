import React from 'react'
import '../css/myprogress.css'
import ThreeBar from "../assets/3 bar.svg";
import Htmlcard from '../assets/htmlcard.png'
import cssCard from '../assets/csscard.png'
import reduxcard from '../assets/reduxcard.png'
import reactCard from '../assets/reactcard.png'
import TitleStyle from './title component/TitleStyle';



const Myprogress = () => {
    return (
        <div className="my_progress" id="skill">
           <TitleStyle>MY PROGRESS</TitleStyle>
            <div className="progress_title">
               <h3>FRONTEND SKILL</h3>
            </div>
            <div className="front_end_Card">
                <div className="first_card">
                    <img src={Htmlcard} alt="" />
                </div>
                <div className="second_card">
                    <img src={cssCard} alt="" />
                </div>
                <div className="third_card">
                    <img src={reactCard} alt="" />
                </div>
                <div className="forth_card">
                    <img src={reduxcard} alt="" />
                </div>
                <div className="fift_card">
                    <img src={Htmlcard} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Myprogress
