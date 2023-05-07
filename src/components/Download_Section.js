import React from 'react'
import im from "../assets/tel.png"
import down from "../assets/down2.png"

export default function Download_Section() {
  return (
    <section className="Download-Section">
        <div className ="Container-down">

              <div className ="Image-down">
                <img src ={im} alt="image tel" />
                </div>
           
            <div className ="Grid-down">
                <div className ="text-down">
                <h1> Téléchargez vos émissions pour regarder hors ligne.</h1>

                  <p> Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder. </p>

                </div>
             </div> 

             <div className="parag-down"> 
                <p className ="parag">
                  Le logo biologique de l’UE donne une identité visuelle cohérente aux produits biologiques
                  issus de l’Union européenne. Il permet aux consommateurs d’identifier plus facilement
                  les produits biologiques et aide les agriculteurs à les commercialiser dans l’ensemble de l’UE.        
                </p>
            </div>
                
            <div id ="Download">
                <img src ={down} alt="logo download" />
                <p> Stranger Things ! Patientez...</p>

            </div>
            
        </div>
    </section>
  )
}
