import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
function NavBar (){
    const favNumber = useSelector((state)=>state.favNumber);

    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                     Movies
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} activeClassName="active1" to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName="active1" to="/movies">Movies</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName="active1" to="/fav" style={{color:"gold"}}>
                    <FontAwesomeIcon style={{color:"gold"}}icon={faStar} size="lg"></FontAwesomeIcon>
                        <span style={{color:"white"}}> FAV </span> {favNumber}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar