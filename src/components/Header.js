import React from 'react'
import image from "../assets/netflix.png"
import  {Link} from 'react-router-dom';

export default function Header() {
  return (
    
    <header className ="Header">
        <img src ={image} alt ="logo netflix" />

       <ul>
        <Link to ="/">HOME</Link>
        <Link to ="/devices"> DEVICES </Link>
        <Link to ="/download"> DOWNLOAD </Link>
        <Link to ="/everywhere"> EVERYWHERE </Link>

       </ul>
       

    </header>
    
  )
}

