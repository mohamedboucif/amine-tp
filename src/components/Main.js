import React from 'react'

export default function Main() {
  return (

   <main className ="Main">

    <div classeName="Main-Child">
        <h2> Films , émission de télevision et plus encore illimités. </h2>

    <span id="titre2">Regarder n'importe ou .Annuler à tout moment.</span>

        <p>Prés à regarder?  Entrer votre email pour créer
         ou rénitialiser votre abonnement.</p>
    
    <form className ="Main-form">
    <input type ="text" placeholder ="Entrer votre email "/>
    <button> Chercher </button>

    </form>
    </div>


    </main>

  )
}
