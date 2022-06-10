import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';

const OurWork = () => {
    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <StyledFrame1></StyledFrame1>
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <StyledHide>
                        <motion.img variants={photoAnim} src={athlete} alt="an athlete running" />
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="a racer driving fast" />
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The GoodTimes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="the old goodtimes" />
                </Link>
            </StyledMovie>
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`;

const StyledHide = styled.div`
    overflow:hidden;
`;

// Frame Animation
const StyledFrame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width: 100%;
    height:100vh;
    background: #fffebf;
    z-index: 2;
`;

const StyledFrame2 = styled(Framed1)`
    background: #ff8efb;
`;

const StyledFrame3 = 

export default OurWork;