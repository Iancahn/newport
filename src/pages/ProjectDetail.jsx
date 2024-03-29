import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ProjectState } from '../projectState';
//Page Components
import Footer from '../components/Footer';
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
                            <Award title={award.title} description={award.description} key={award.title} codeStack={award.codeStack} viewProject={award.viewProject} />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={project.secondaryImg} alt='' />
                    </StyledImageDisplay>
                    <Footer />
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
    .line {
        width: 30%;
        background: #00C14A;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    .line2, .line3 {
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
const Award = ({ title, description, codeStack, viewProject }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
            <h3 className="techused">Technology Used:</h3>
            <div className="line2"></div>
            <div className="stackImages">
                {codeStack.map((stackImage) => (
                    <img src={stackImage} className='stackImage' />
                ))}

            </div>
            <h3>View Project below:</h3>
            <div className="line3"></div>
            <button className="projectbutton" onClick={viewProject}>Go to Project</button>
        </StyledAward>

    )
}

export default ProjectDetail;