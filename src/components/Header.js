import React from 'react'
import image from "../assets/netflix.png"
import  {Link} from 'react-router-dom';

export default function Header() {
  return (
    
    <header className ="Header">
        <img src ={image} alt ="logo netflix" />

        <ul>
        <li>
          
          <Link to ="/">HOME</Link>
       </li>
       <li>
       <Link to ="/devices"> DEVICES </Link> 
       </li>
       <li>
       
        <Link to ="/download"> DOWNLOAD </Link> 
        </li> 
        <li>
        
          <Link to ="/everywhere"> EVERYWHERE </Link>
        </li>
        <li>
      
          <Link to ="/Movies"> MOVIES </Link>
        </li>
      
       </ul>

    </header>
    
  )
}

