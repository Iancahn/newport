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
                Any <span>Questions?</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
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
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background:#ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
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