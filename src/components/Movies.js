import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Button,Container,Row} from 'react-bootstrap';

 
 export default function Movies() {

     // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

       const key = 'a8bb67babc58b4708d37f43a7cf06b2f';
       
       const [query,setQuery] = useState ("avatar");
       const [movies,setMovies] =useState ([]);

       const getMovie=()=> {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8bb67babc58b4708d37f43a7cf06b2f&query=${query}`
        ).then(function(response) {
            setMovies(response.data.results.slice(0,6));

        });      
       };    

        useEffect (()=> {
            getMovie()
        }, []);
        
          return (
            <main classNme="Mainmov">
            <div> 
               <label> 
               Recherche : 
                 <input 
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                type ="text" 
                placeholder='nom du film'/>  
              <button onClick={getMovie}> Recherche </button>  
              </label>
            </div>

            <Container>
                <Row>

            {movies.map((element)=>{
                return ( 
                <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} />
                      <Card.Body>
                        <Card.Title>{element.original_title}</Card.Title>
                        <Card.Text> {element.overview.slice(0,40)}... </Card.Text>
                        <Button variant="primary">continuez la lecture </Button>
                      </Card.Body>
                    </Card>
                  )
                })}

                </Row>
                  </Container>
                  
                  </main>
          )
          
       
            }