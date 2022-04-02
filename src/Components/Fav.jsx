import  "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row,Card } from "react-bootstrap";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie } from "../store/action";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MovieCard from "./Movie-Card";

function Fav (){
    const fav = useSelector((state)=>state.favReducer.movies)
    const [update , setUpdate] = useState("update");
    const dispatch = useDispatch();
    function deleteOne(movie){
        dispatch(deleteMovie(movie));
        setUpdate(movie.title)
    }
    return(
        <Container className="d-flex flex-wrap justify-content-around">
            {fav.map((movie)=>{
                return(
                    <Card style={{ width: '15rem' ,height:"400px",marginBottom:"40px"}}>
                        <Card.Img style={{height:"60%"}} variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>                  
                            <Button style={{width:"100px"}} as={Link} to={`/movies/${movie.id}`} variant="outline-primary">Details</Button>
                            <Button style={{width:"100px"}} onClick={()=>{deleteOne(movie)}} variant="outline-danger">Delete</Button>
                        </Card.Body>
                    </Card>
                    
                )
            })}
        </Container>
    )
}

export default Fav