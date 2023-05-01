import React from 'react'
import tv from "../assets/dv.jpg"
import video from "../assets/video2.mp4"


export default function Devices_Sections() {
  return (

    <section className = "Section">
      <div className ="Container">

      <div className="Text">
        <h1>Profitez sur votre téléviseur.</h1>
        
           <p> Regardez sur smart TV,Playsation,Xbox,Chromecast,Apple Tv,
                lecteurs,Blu-ray et plus encore.
           </p>
      </div>
       <div className="Grid">
          <img src ={tv} type="image-tv" />
            <video>
             <source src={video} type="video/mp4" />
          
               </video>
       </div>

      <div className="more-text">
           <p> Les contenus proposés varient selon les pays et peuvent évoluer au fil du temps. 
              Vous avez accès à une grande variété de programmes originaux primés, séries,
             films, documentaires, et bien plus encore.
           </p>
      </div>


     </div>
    </section>

  )
}
