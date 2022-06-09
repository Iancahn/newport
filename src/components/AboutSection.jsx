import React from 'react';
import home1 from '../img/home1.png'
// Styled
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";
// Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };
    const container = {
        hidden: { x: 100 },
        show: {
            x: 0,
            transition: {
                duration: 0.75,
                ease: 'easeOut',
                staggerChildren: 0.5,
                when: "afterChildren"
            }
        },
    };
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>I work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt='Guy with a camera'></img>
            </StyledImage>
        </StyledAbout>
    );
}

export default AboutSection;