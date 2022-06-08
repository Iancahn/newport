import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const url = useLocation();
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url.pathname);
        setMovie(currentMovie[0]);
    }, [movies, url]);
    console.log(movie);

    return (
        <>
            {movie && (
                <StyledDetails>
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </StyledHeadline>
                </StyledDetails>
            )}
        </>
    );


};

const StyledDetails = styled.div`
    
`

const StyledHeadline = styled.div`
    
`

export default MovieDetail;