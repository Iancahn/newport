import React from 'react';
import home1 from '../img/home1.png';
import Wave from "./Wave";
// Styled
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';


const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div>
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
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img src={home1} alt='Guy with a camera' variants={photoAnim}></motion.img>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
}

export default AboutSection;