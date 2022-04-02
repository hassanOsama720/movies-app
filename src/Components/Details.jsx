import  "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/MoviesAction";
import { languageContext } from "../context/language";

function Details (){
    const MovieDetails = useSelector((state)=>state.MoviesReducer.movie)
    const {langContext, setLangContext} = useContext(languageContext)
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getMovie(params.id,langContext))
  },[langContext]);

    return(
        <Container>
            <Row>
                <Col lg={4} md={4}><img style={{height:"300px"}} alt="" src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}></img></Col>
                <Col>
                    <h1 style={{fontStyle:"italic",fontWeight:"bolder"}}>{MovieDetails.title}</h1>
                    <h3 style={{fontStyle:"italic",color:"#999"}}>{MovieDetails.overview}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Home Page : <span><a href={MovieDetails.homepage}>Click Here</a></span></h2>
                    <h2>Language : <span>{MovieDetails.original_language}</span></h2>
                    <h2>Release : <span>{MovieDetails.release_date}</span></h2>
                    <h2>Status : <span>{MovieDetails.status}</span></h2>
                    <h2>Rating : <span>{MovieDetails.vote_average}</span></h2>
                    
                    <h2>Voters : <span>{MovieDetails.vote_count}</span></h2>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Details