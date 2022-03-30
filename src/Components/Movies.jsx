
import axios from "axios";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card , Button, Container } from "react-bootstrap";
import MovieCard from "./Movie-Card";



function Movies (){
    const [Movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d1f06f746c82eac24bc1f93a2ca831e0')
            .then((res)=>{setMovies(res.data.results)
            })
    },[])


    return(
        <Container className="d-flex flex-wrap justify-content-around">
            {Movies.map((Movie) => {
                
          return (
            <MovieCard Movie={Movie}></MovieCard>
          );
        })}
        </Container>
        
    )
}

export default Movies