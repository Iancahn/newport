import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Images
import tesla from '../img/tesla-small.jpg'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <motion.div variants={sliderContainer}>
                <StyledFrame1 variants={slider}></StyledFrame1>
                <StyledFrame2 variants={slider}></StyledFrame2>
                <StyledFrame3 variants={slider}></StyledFrame3>
                <StyledFrame4 variants={slider}></StyledFrame4>
            </motion.div>
            <StyledMovie>
                <motion.h2 variants={fade}>The Tesla Clone</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/tesla-clone">
                    <StyledHide>
                        <motion.img variants={photoAnim} src={tesla} alt="a Tesla car driving" />
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>PayPerClick Calculator</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/ppc-calculator">
                    <img src={theracer} alt="a racer driving fast" />
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Magical Music Player</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/music-player">
                    <img src={goodtimes} alt="the old goodtimes" />
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Google Front test</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/google-test">
                    <img src={goodtimes} alt="the old goodtimes" />
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Not Truth/Twitter Clone</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/not-truth">
                    <img src={goodtimes} alt="the old goodtimes" />
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>My to do list</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/to-do-list">
                    <img src={goodtimes} alt="the old goodtimes" />
                </Link>
            </StyledMovie>
            <ScrollTop />
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
    @media (max-width: 1300px){
    padding:2rem 2rem;
}
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background:  #00C14A;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
        border-radius:8px;
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
    background: #18F5EA;
    z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
    background: #255C59;
`;

const StyledFrame3 = styled(StyledFrame1)`
    background: #00C14A;
`;

const StyledFrame4 = styled(StyledFrame1)`
    background: #C93263;
`;

export default OurWork;