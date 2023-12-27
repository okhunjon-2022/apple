import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {BsApple} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {BsBag} from "react-icons/bs"

function Navbar() {
  return (
    <div className='navbar'>
      
      
    <ul className="navbar__items">

      <li className='navabr__item'>
      <Link to={"/"}>
         <BsApple/>
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/store"}> 
        Store
      </Link>
      </li>
      
      <li className='navabr__item'>
      <Link to={"/mac"}>
        Mac
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/ipad"}>
        iPad
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/iphone"}>
        Iphone
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/watch"}>
        Wacht
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/airpods"}>
        Airpods
      </Link>
      </li>


      <li className='navabr__item'>
      <Link to={"/tv"}>
        TV & Home
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/only"}>
        Only on Apple
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/accesstories"}>
        Accesstories
      </Link>
      </li>

      <li className='navabr__item'>
      <Link to={"/support"}>
        Support
      </Link>
      </li>
      <li>
        <span className='search'><AiOutlineSearch/></span>
      </li>
      <li>
        <span className='bag'><BsBag/></span>
      </li>






      </ul>  


    </div>
  )
}

export default Navbar