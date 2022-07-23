import React from 'react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

// Remember to use link here to point towards socials
const ContactUs = () => {
    return (
        <StyledContact variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <StyledTitle2>
                <StyledHide2>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </StyledHide2>
            </StyledTitle2>
            <div>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2><a className="contactlink" href="mailto:iancahn@live.com">Send Me An Email</a></h2>
                    </StyledSocial>
                </StyledHide2>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2><a className="contactlink" href="tel:+27824392825">Give Me A Call</a></h2>
                    </StyledSocial>
                </StyledHide2>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2><a className="contactlink" href="https://github.com/Iancahn" target="_blank">View My GitHub</a></h2>
                    </StyledSocial>
                </StyledHide2>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2><a className="contactlink" href="https://www.linkedin.com/in/ian-cahn-801328184/" target="_blank">Connect on LinkedIn</a></h2>
                    </StyledSocial>
                </StyledHide2>
            </div>
            <ScrollTop />
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #181818;
    min-height: 90vh;
    @media (max-width: 1300px){
        padding:2rem;
        font-size:1rem;
}
`;

const StyledTitle2 = styled.div`
    margin-bottom: 4rem;
    color:black;
    @media (max-width: 1300px){
        margin-top:5rem;
}
`;

const StyledHide2 = styled.div`
    overflow:hidden;
`;

const StyledCircle = styled.div`
    border-radius:50%;
    width: 3rem;
    height: 3rem;
    background: #00C14A;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items:center;
  h2{
    margin: 2rem;
  }  
`;

export default ContactUs;