import React from 'react'
import "./Ipad.css"
import IpadImg from "../../assets/ipadd.jpg"
import {RiArrowRightSLine} from "react-icons/ri"
import {RiMovieFill} from "react-icons/ri"


function Ipad() {
  return (
    <>
    <div>
      <img src={IpadImg} alt="" width={1600} />
    </div>

    <div className="ipad__gift">
      <p>The Apple Shopping Event is coming. From November 25 through 28 get up to a $250 Apple Gift Card when you buy an eligible Mac.◊  <a href="#">Get an early look <span className='riarrow'><RiArrowRightSLine/></span></a></p>
    </div>

    <div className="ipad__inctroduce">
    <div className="introduce">
      <h1>Introducing the all‑new <br /> iPad and iPad Pro.</h1>
    </div>
    <button className='ipad__watch'>Watch the film < RiMovieFill/></button>
    </div>
    
    
    
    </>
  )
}

export default Ipad