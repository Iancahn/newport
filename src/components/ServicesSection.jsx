import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// Styled
import { StyledAbout, StyledDescription2, StyledImage } from "../styles";
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledServices ref={element} variants={scrollReveal} animate={controls} initial="hidden">
            <StyledImage>
                <img src={home2} alt="a high quality camera"></img>
            </StyledImage>
            <StyledDescription2>
                <h2>A bit about me<span>.</span></h2>
                <StyledCards>
                    <StyledCard>
                        <p>For the past 7 years I have been working for myself building websites for small and medium businesses in and around South Africa. I started learning HTML and CSS way back in 2015, but took the easy route with Wordpress. For the past 2 years I decided to get back into actual web development, and it's safe to say I fell in love writing code and solving actual web problems<span>.</span></p>
                    </StyledCard>
                    <StyledCard>
                        <p>I would say my best strengths are that I am naturally curious, a self starter and my extensive background in digital marketing. I believe that my background gives me an edge when it comes to project management, UX/graphic design, Wordpress, Webflow, SEO, PPC and more<span>.</span></p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription2>

        </StyledServices>
    );
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 2rem;
    }
    p{
        width:90%;
        padding: 2rem 0rem 2rem 0rem;
    }
`;

const StyledCards = styled.div`
    display:block;

    @media (max-width: 1300px){
        justify-content:center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 35rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background: white;
            color:black;
            padding:1rem;
        }
    }
`

export default ServicesSection;