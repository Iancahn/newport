import React from 'react';
// styled
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any <span>Questions?</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do I offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illum?</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFaq>
    )

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