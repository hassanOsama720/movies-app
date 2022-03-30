import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home (){


    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                     Movies
                </Navbar.Brand>
                <NavLink as={Link} to="/">Home</NavLink>
            </Container>
        </Navbar>
    )
}

export default Home