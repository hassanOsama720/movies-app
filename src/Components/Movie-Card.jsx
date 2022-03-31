import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Card , Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie } from "../store/action";
function MovieCard ({Movie}){
    const fav = useSelector((state)=>state.moviesName);
    const [gold,setGold] = useState({})
    const dispatch = useDispatch();
    useEffect(()=>{
        setGold("grey")
        fav.map((movie)=>{
            if(movie.id === Movie.id){
                setGold("gold")
            }
        })
    },[Movie]);
    function changeColor(){
        if(gold === "grey"){
            setGold("gold")
            dispatch(addMovie({name:Movie.title,id:Movie.id}))
        }
        if(gold === "gold"){
            setGold("grey")
            dispatch(deleteMovie({name:Movie.title,id:Movie.id}))
        }
        
       
    }
    return(
        <Card style={{ width: '15rem' ,height:"400px",marginBottom:"40px"}}>
                <Card.Img style={{height:"60%"}} variant="top" src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{Movie.title}</Card.Title>
                    
                    <Button as={Link} to={`/movies/${Movie.id}`} variant="primary">Details</Button>
                    <FontAwesomeIcon style={{color:gold,position:"absolute",top:"-25",left:"43%"}}
                    onClick={changeColor}
                    icon={faStar} size="3x"></FontAwesomeIcon>
                </Card.Body>
            </Card>
    )
}

export default MovieCard