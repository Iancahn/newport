import React from 'react';
import html from '../img/html-icon.png';
import css from '../img/css-icon.png';
import javascript from '../img/javascript-icon.png';
import react from '../img/react-icon.png';
// Framer Motion
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

function IconList() {
    const [element6, controls6] = useScroll();
    return (
        <motion.div variants={scrollReveal} ref={element6} animate={controls6} initial="hidden" className="icon-container">
            <div className="row">
                <div className="column4">
                    <div>
                        <img src={html} alt="Just an HTML icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={css} alt="Just an CSS icon"></img>
                    </div>
                </div><div className="column4">
                    <div>
                        <img src={javascript} alt="Just an Javascript icon"></img>
                    </div>
                </div><div className="column4">
                    <div>
                        <img src={react} alt="Just an React icon"></img>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IconList;