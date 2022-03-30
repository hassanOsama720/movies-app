import  "bootstrap/dist/css/bootstrap.min.css";
import { Card , Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard ({Movie}){


    return(
        <Card style={{ width: '20rem' ,height:"450px",marginBottom:"40px"}}>
                <Card.Img style={{height:"80%"}} variant="top" src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{Movie.title}</Card.Title>
                    
                    <Button as={Link} to={`/movies/${Movie.id}`} variant="primary">Details</Button>
                </Card.Body>
            </Card>
    )
}

export default MovieCard