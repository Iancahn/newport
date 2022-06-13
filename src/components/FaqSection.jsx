import React from 'react';
// styled
import styled from 'styled-components';
import { StyledAbout } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>
                Any Questions?
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Jaco IS 'N GOIEIE GFX DESINGER' ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                    </div>
                </Toggle>
                <Toggle title="What products do I offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );

}

const StyledFaq = styled(StyledAbout)`
    display:block;
    span{
        display:block;
    }
    h2{
        color:#00C14A;
        padding-bottom:2rem;
        font-weight:400;
    }
    .faq-line{
        background:#ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .dropdown{
        display:flex;
    }

    .icontoggle{
        color:#00C14A;
        margin-top:0.46rem;
        padding-right:1.5rem;
    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;