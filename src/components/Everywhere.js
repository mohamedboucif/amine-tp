import React from "react"
import lg from "../assets/everywhere.jpg"
import evw from "../assets/evey3.jpg"
import video from "../video/video.mp4"



const Everywhere =()=> {

    return (

        <section className="everywhere-section">
            <div className="Container-every">

                <div className ="Grid">

                    <div className="text-every">

                        <h1> Regardez partout. </h1>
                        <p> 
                        Diffusez des films et des émissions de télévision en illimité
                        sur votre téléphone,tablette,ordinateur portable et téléviseur
                        sana payer plus.
                    </p>
                    </div>
                    
                
                  <video controls>
                    <source src={video} type="video/mp4"
                     /> 
                    votre navigateur ne supporte pas la video
                </video>

                <div className ="image-every">
                 <img src={lg}  alt="logo-image" />
                 </div>

                <div className="image-deux">
                 <img src={evw} alt="image3" />
                 </div>
                <div>
                
                </div>
                <p className="pa-every">
                Pour utiliser Netflix sur votre téléphone, 
                vous devez d'abord télécharger l'application Netflix depuis le Google Play Store 
                (pour les appareils Android) ou l'App Store (pour les appareils iOS/Apple). 
                Une fois que vous avez installé l'application.
                </p>    
                 
                
                

               
            </div>
               
            </div>
            

        </section>

    ) 
}
export default Everywhere;