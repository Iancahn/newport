import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';
import { wrapHandler } from 'framer-motion';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

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
                <StyledDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="Ian project" />
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={movie.secondaryImg} alt='' />
                    </StyledImageDisplay>
                </StyledDetails>
            )}
        </>
    );


};

const StyledDetails = styled(motion.div)`
    color:white;
`

const StyledHeadline = styled.div`
    min-height:98vh;
    padding-top:28vh;
    position:relative;
    h2{
        position:absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, 10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`

const StyledAwards = styled.div`
    min-height:60vh;
    display:flex;
    margin: 5rem 6rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px){
        display:block;
        margin:2rem 2rem;
}
`

const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size:2rem;
    }
    .line{
        width: 30%;
        background: #00C14A;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding:2rem 0rem;
    }
`

const StyledImageDisplay = styled.div`
    min-height:50vh;
    img{
        width:100%;
        height: 100vh;
        object-fit: cover;
    }
`

// Award Component
const Award = ({ title, description, skillslogo }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>

    )
}

export default MovieDetail;