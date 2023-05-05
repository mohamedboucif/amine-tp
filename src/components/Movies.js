import React from 'react';
import {useState} from 'react';
import axios from 'axios';

 
 export default function Movies() {

     // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

       const key = 'a8bb67babc58b4708d37f43a7cf06b2f';
       
       const [query,setQuery] = useState ('');
       const [movies,setMovies] =useState ([]);

       const getMovie=()=> {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8bb67babc58b4708d37f43a7cf06b2f&query=${query}`
        ).then(function(response) {
            setMovies(response.data.results);

        });      
       };
       
   return (
        <div className="MainMovies">
           <label> 
            Recherche : 
            <input 
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                type ="text" 
                placeholder='nom du film'
            />  
         <button onClick={getMovie}> Recherche </button>

          </label>
       

      
          
          <div className="Movieslist">
         {movies.map((element)=> {

                return <p>

                <h4> {element.original_title} </h4>
                <img 
                  style ={{height :"125px", width: "125px"}}
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} />

                </p>
             
            })}   
            </div>
      </div>
    
   )
 }
 
  



