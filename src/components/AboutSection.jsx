import React from 'react';
import styledComponents from 'styled-components';
import home1 from '../img/home1.png'
// Styled
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <styledHide>
                        <h2>I work to make</h2>
                    </styledHide>
                    <styledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </styledHide>
                    <styledHide>
                        <h2>true.</h2>
                    </styledHide>
                </div>
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