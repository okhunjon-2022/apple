import React from 'react'
import "./Home.css"
import Homeimg from "../../assets/main.jpg"
import {IoIosArrowForward} from "react-icons/io"

function Home() {
  
  return (
    <div className='home'>
      

      <div className='wrapper'>
        <h1 className="shopping">
          Apple Shopping Event
        </h1>
        <p className='home__info'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ea quae corporis laudantium consecte
        </p>
        <div className="home__get">
          <p>Get an early look <span><IoIosArrowForward/></span></p>
        </div>
      </div>
         
    </div>
  )
}

export default Home