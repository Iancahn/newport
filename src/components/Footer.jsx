import React from 'react';
// styled
import styled from 'styled-components';
import { StyledFooter } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const Footer = () => {
    const [element, controls] = useScroll();
    return (
        <StyledFooter variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <div>
                <p>Please note this is my personal playground and some bugs might be looming...</p>
            </div>

        </StyledFooter>
    );

}

export default Footer;