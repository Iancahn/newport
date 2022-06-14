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
                <Toggle title="How Do We Start?">
                    <div className="answer">
                        <p>I am currently working on a freelancing schedule, so I would need a 30 day notice period.</p>
                        <p>This will give me enough time to wrap up old projects and start the onboarding process.</p>
                    </div>
                </Toggle>
                <Toggle title="My Schedule and Timezone">
                    <div className="question">
                        <div className="answer">
                            <p>I am currently living in the GMT+2 timezone, but my lifestyle is super flexible.</p>
                            <p>My day to day typically starts at 09h00, where I spend the first four hours on the most important task.</p>
                            <p>After I completed the critical work, I tend to small things or admin. I am also a fan of doing some work later at night.</p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="Remote and Office Work">
                    <div className="answer">
                        <p>One of my main reasons I for moving into DEV, was to work as part of a team on larger projects.</p>
                        <p>I have been working remotely for the past 7 years, but if there is a great team office, that would be cool too.</p>
                    </div>
                </Toggle>
                <Toggle title="My office setup and gear">
                    <div className="answer">
                        <p>Productivity requires fast internet, so I installed a 500Down/200Up Fiber line.</p>
                        <p>My PC is on the higher end, equiped with a recent i5, 32GB of Ram and fancy NVME hard drives.</p>
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