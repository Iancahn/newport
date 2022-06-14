import React from 'react';
import home1 from '../img/home1.jpg';
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
                        <motion.h1 variants={titleAnim}>Hello, I am <span>Ian Cahn</span>,</motion.h1>
                    </StyledHide>
                    <StyledHide>
                        <motion.h1 variants={titleAnim}>a Front End Developer<span>.</span></motion.h1>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>I have over 7 years of web design experience, with the past 2 years seriously focusing on improving my Front End Dev Stack.</motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img src={home1} alt='Guy with a camera' variants={photoAnim} inital="hidden" animate="show"></motion.img>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
}

export default AboutSection;