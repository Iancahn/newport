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
                <Toggle title="Why am I looking for project work?">
                    <div className="answer">
                        <p>This is probably the question that most people think of first, and it has a short easy answer.</p>
                        <p>Working in digital marketing has become stale for me, and I want to become part of a larger team.</p>
                    </div>
                </Toggle>
                <Toggle title="Remote and Office Work">
                    <div className="answer">
                        <p>One of my main reasons I for moving into DEV, was to work as part of a team on larger projects.</p>
                        <p>So working from some cool office with a bunch of like minded invididuals sounds kinda fun, but I love remote too.</p>
                    </div>
                </Toggle>
                <Toggle title="My Schedule and Timezone">
                    <div className="question">
                        <div className="answer">
                            <p>I am currently living in the GMT+2 timezone, but my lifestyle is super flexible.</p>
                            <p>My day to day typically starts at 09h00, where I spend the first four hours on client critial work and important tasks.</p>
                            <p>After I completed the critical work, I tend to finish small things or admin. I am also a fan of doing some work later at night.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="My office setup and gear">
                    <div className="answer">
                        <p>Productivity requires fast internet, so I installed a 500Down/500Up Fiber line.</p>
                        <p>My PC is on the higher end, equiped with a recent Gen9-i5, 32GB of Ram and fancy NVME hard drives.</p>
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