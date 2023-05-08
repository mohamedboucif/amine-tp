import React from 'react'
import tv from "../assets/crazy.png";
import video2 from "../video/supermario.mp4"


export default function Devices_Sections() {
  return (

    <section className = "Section">
      <div className ="Container-Section">

      <div className="Text">
        <h1>Profitez sur votre téléviseur.</h1>
        
           <p className="para-devices">
             Regardez sur smart TV,Playsation,Xbox,Chromecast,Apple Tv,
                lecteurs,Blu-ray et plus encore.
           </p>
           <div className="more-text">
               <p> Les contenus proposés varient selon les pays et peuvent évoluer au fil du temps. 
                Vous avez accès à une grande variété de programmes originaux primés, séries,
            films, documentaires, et bien plus encore.
            </p>
            </div>
           
           </div>
      
       <div className="Grid-devices">
              <div className="image-devices">
                <img src ={tv} type="image-tv" />
              </div>
              
              <video controls>
             <source src= {video2} type="video/mp4" />
          
               </video>     

       </div>
     
     </div>


     
    </section>

  )
}
