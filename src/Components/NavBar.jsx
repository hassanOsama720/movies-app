import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar (){


    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                     Movies
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar