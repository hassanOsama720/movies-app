
import axios from "axios";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card , Button, Container } from "react-bootstrap";
import MovieCard from "./Movie-Card";



function Movies (){
    const [Movies, setMovies] = useState([]);
    const [page, setpage] = useState(1);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d1f06f746c82eac24bc1f93a2ca831e0&page=${page}`)
            .then((res)=>{setMovies(res.data.results)
              console.log(Movies)
            })
    },[page])
     function changePage(str){
      if(str === "next"){
         setpage((page+1));
      }
      if(str === "back" && page > 1){
        setpage((page-1))
      }
      
    }

    return(
      <>
        <Container className="d-flex flex-wrap justify-content-around">
            {Movies.map((Movie) => {
                
          return (
            <MovieCard Movie={Movie}></MovieCard>
          );
        })}
        
        </Container>
        <Container className="d-flex justify-content-around">
          <Button style={{width:"100px"}} onClick={()=>{changePage("next")}}  variant="outline-danger">Next</Button>
          <Button style={{width:"100px"}} onClick={()=>{changePage("back")}}  variant="outline-danger">back</Button>

        </Container>
      </>  
    )
}

export default Movies