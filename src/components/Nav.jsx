import React from 'react';
// styled
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Ian Cahn</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Me</Link>
                    <StyledLine transition={{ duration: 0.75 }} innitial={{ width: '0%' }} animate={{ width: pathname === '/' ? '52%' : '0%' }} />
                </li>
                <li>
                    <Link to="/work">2. My Work</Link>
                    <StyledLine transition={{ duration: 0.75 }} innitial={{ width: '0%' }} animate={{ width: pathname === '/work' ? '52%' : '0%' }} />
                </li>
                <li>
                    <Link to="/contact">3. Contact Me</Link>
                    <StyledLine transition={{ duration: 0.75 }} innitial={{ width: '0%' }} animate={{ width: pathname === '/contact' ? '52%' : '0%' }} />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height:10vh;
    position:sticky;
    top:0;
    z-index:10;
    display:flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
    padding:1rem 10rem;
    background: #211E24;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    li{
        font-size:1.2rem;
        padding-left:3rem;
        padding-right:3rem;
        position:relative;
    }
    #logo{
        font-size:3.3rem;
        font-family: 'Permanent Marker', cursive;
        font-weight: lighter;
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 2rem 1rem;
        ul{
            padding:2rem;
            justify-content: space-around;
            width:100%;
        }
        #logo{
            display:inline-block;
            margin: 1rem;
        }
    }
`;

const StyledLine = styled(motion.div)`
    height: 0.3rem;
    background: #00C14A;
    width:0%;
    position:absolute;
    bottom: -60%;
    left: 25%;
    border-radius:5px;
    @media (max-width: 1300px)  {
        left: 0%;
    }
`;

export default Nav;

