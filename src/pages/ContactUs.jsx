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
                        <h2>Send Us A Message</h2>
                    </StyledSocial>
                </StyledHide2>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send An Email</h2>
                    </StyledSocial>
                </StyledHide2>
                <StyledHide2>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Our Social Media</h2>
                    </StyledSocial>
                </StyledHide2>
            </div>
            <ScrollTop />
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const StyledTitle2 = styled.div`
    margin-bottom: 4rem;
    color:black;
`;

const StyledHide2 = styled.div`
    overflow:hidden;
`;

const StyledCircle = styled.div`
    border-radius:50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items:center;
  h2{
    margin: 2rem;
  }  
`;

export default ContactUs;