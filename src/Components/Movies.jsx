
import axios from "axios";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { Card , Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { languageContext } from "../context/language";
import { getMoviesList, getSearch } from "../store/MoviesAction";
import MovieCard from "./Movie-Card";



function Movies (){
  //const [Movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const {langContext, setLangContext} = useContext(languageContext)
  const [searchPage, setsearchPage] = useState(1);
  const Movies = useSelector((state)=>state.MoviesReducer.list)
  const search = useSelector((state)=>state.MoviesReducer.search)
    const dispatch = useDispatch();
    useEffect(()=>{
      if(search === ""){
        dispatch(getMoviesList(page,langContext))
        setsearchPage(1)
      }
      else{
        dispatch(getSearch(search,searchPage,langContext))
      }
        
    },[page,search,searchPage,langContext])

     function changePage(str){
      if(str === "next"){
        if(search === ""){
          setpage((page+1));
        }
        else{
          setsearchPage((searchPage+1))
        }
         
      }
      if(str === "back"){
        if(search === "" && page >1){
          setpage((page-1))
        }
        else if(searchPage > 1 ){
          setsearchPage((searchPage-1))
        }
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