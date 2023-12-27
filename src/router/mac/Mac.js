import React from 'react'
import './Mac.css';
import MacImg from "../../assets/mac.JPG"
import {RiArrowRightSLine} from "react-icons/ri"

function Mac() {
  return (
    <>
    <div className='mac'>
      <img src={MacImg} alt="" width={1520} />
    </div>
    
    <div className="mac__gift">
      <p>The Apple Shopping Event is coming. From November 25 through 28 get up to a $250 Apple Gift Card when you buy an eligible Mac.◊  <a href="#">Get an early look <span className='riarrow'><RiArrowRightSLine/></span></a></p>
    </div>

    <div className="mac__macBook">
      <p className='new'>New</p>
      <h1>MacBook Air</h1>
      <h2>Don’t take it lightly.</h2>
      <p>From $1199</p>
      <div className="btns">
        <button className='buy'>Buy</button>
        <button className='learnMore'>Learn more <RiArrowRightSLine/></button>
      </div>
    </div>
    <div className="mac__phone">
      
    </div>



    </>
  )
}

export default Mac