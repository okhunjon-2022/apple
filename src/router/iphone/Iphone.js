import React from 'react'
import "./Iphone.css"
import MacImg from "../../assets/mac.JPG"
import {RiArrowRightSLine} from "react-icons/ri"

function Iphone() {
  return (
    <>
      <div className='mac'>
      <img src={MacImg} alt="" width={1520} />
    </div>
    
    <div className="mac__gift">
      <p>The Apple Shopping Event is coming. From November 25 through 28 get up to a $250 Apple Gift Card when you buy an eligible Mac.◊  <a href="#">Get an early look <span className='riarrow'><RiArrowRightSLine/></span></a></p>
    </div>

    <h4 className="news">New</h4>

    <h3 className="iphone">
      iPhone 14
    </h3>
    <h1 className="big">
    Big and bigger.
    </h1>
    <p className="price">
    From $33.29/mo. for 24 mo. or $799 before trade‑in1
    </p>
    <div className="btns">
        <button className='buy'>Buy</button>
        <button className='learnMore'>Learn more <RiArrowRightSLine/></button>
      </div>
      

      <div className="ipone__immg"></div>
    
    
    </>
  )
}

export default Iphone