import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Container, Nav,Form,FormControl,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../store/MoviesAction";
import { useContext } from "react";
import { languageContext } from "../context/language";
function NavBar (){
    const {langContext, setLangContext} = useContext(languageContext);
    const favNumber = useSelector((state)=>state.favReducer.favNumber);
    const searchValue = useSelector((state)=>state.MoviesReducer.search);
    const dispatch = useDispatch();
    function changeSearch (e){
        dispatch(updateSearch(e.target.value))
        console.log(e.target.value)
    }
    function changeLang(){
        if(langContext === "en"){
            setLangContext("ar")
        }
        else{
            setLangContext("en")
        }
    }
    return(
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="home">
                     Movies
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} activeClassName="active1" to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName="active1" to="/movies">Movies</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName="active1" to="/fav" style={{color:"gold"}}>
                    <FontAwesomeIcon style={{color:"gold"}}icon={faStar} size="lg"></FontAwesomeIcon>
                        <span style={{color:"white"}}> FAV </span> {favNumber}</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    onChange={(e)=>changeSearch(e)}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchValue}
                    />
                    <Button onClick={changeLang} variant="outline-success">{langContext}</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavBar