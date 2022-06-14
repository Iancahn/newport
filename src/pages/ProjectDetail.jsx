import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ProjectState } from '../projectState';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ProjectDetail = () => {
    const url = useLocation();
    const [projects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    // UseEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url.pathname);
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <StyledDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <StyledHeadline>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="Ian project" />
                    </StyledHeadline>
                    <StyledAwards>
                        {project.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} skillslogo1={award.skillslogo1} skillslogo2={award.skillslogo2} skillslogo3={award.skillslogo3} skillslogo4={award.skillslogo4} skillslogo5={award.skillslogo5} skillslogo6={award.skillslogo6} />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={project.secondaryImg} alt='' />
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
    .line2{
        width: 20%;
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
const Award = ({ title, description, skillslogo1, skillslogo2, skillslogo3, skillslogo4, skillslogo5, skillslogo6 }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
            <h3 className="techused">Technology Used:</h3>
            <div className="line2"></div>
            <div className="techusedlogos">
                <img src={skillslogo1} alt="The HTML logo" />
                <img src={skillslogo2} alt="The CSS logo" />
                <img src={skillslogo3} alt="The JavaScript logo" />
                <img src={skillslogo4} alt="The React logo" />
                <img src={skillslogo5} alt="The NextJs logo" />
                <img src={skillslogo6} alt="The MySQL logo" />
            </div>
        </StyledAward>

    )
}

export default ProjectDetail;