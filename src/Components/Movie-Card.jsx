import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Card , Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie } from "../store/action";
function MovieCard ({Movie}){
    const fav = useSelector((state)=>state.favReducer.movies);
    const [gold,setGold] = useState({})
    const display = "none"
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
            dispatch(addMovie(Movie))
        }
        if(gold === "gold"){
            setGold("grey")
            dispatch(deleteMovie(Movie))
        }
        
       
    }
    return(
        <Card className="card-parent" style={{ width: '15rem' ,height:"300px",marginBottom:"40px"}}>
                <Card.Img style={{height:"100%"}} variant="top" src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} />
                <Card.Body className="card-body">
                    <Card.Title className="card-child card-title" style={{position:"absolute",bottom:"50px",color:"orange", display:display,fontWeight:"bolder",fontStyle:"italic"}}>{Movie.title}</Card.Title>
                    
                    <Button className="card-child" style={{position:"absolute",bottom:"10px",display:display}} as={Link} to={`/movies/${Movie.id}`} variant="outline-primary">Details</Button>
                    <FontAwesomeIcon style={{color:gold,position:"absolute",top:"-25",left:"43%"}}
                    onClick={changeColor}
                    icon={faStar} size="3x"></FontAwesomeIcon>
                </Card.Body>
            </Card>
    )
}

export default MovieCard