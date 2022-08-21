import styled from 'styled-components';
import { motion } from 'framer-motion';

//Styled Components
export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color:white;
    @media (max-width: 1300px){
        display:block;
        padding: 2rem 2rem;
        text-align:center;
    }
`;

export const StyledFooter = styled(motion.div)`
    text-transform: uppercase;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    color:white;
    background-color: #00C14A;
    p{padding-top:1.5rem;
    padding-bottom:1.5rem}
    @media (max-width: 1300px){
        display:block;
        padding: 2rem 2rem;
        text-align:center;
    }
`;

export const StyledDescription = styled.div`
    flex:1;
    padding-right: 5rem;
    z-index:2;
    h2{
        font-weight: 400;
            }
    @media (max-width: 1300px){
        padding:0;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }        
    }
`;

export const StyledDescription2 = styled.div`
    flex:1;
    padding-left: 5rem;
    z-index:2;
    h2{
        font-weight: 400;
            }
    @media (max-width: 1300px){
        padding:0;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }        
    }
`;

export const StyledImage = styled.div`
    flex:1;
    overflow:hidden;
    z-index:2;
    img{
        width: 100%;
        height:80vh;
        object-fit:cover;
        border-radius:8px;
    }
`;

export const StyledHide = styled.div`
    overflow:hidden;
`;