import React from 'react';
// import images
import bootstrap from '../img/bootstrap-icon.png';
import tailwind from '../img/tailwind-icon.png';
import nextjs from '../img/nextjs-icon.png';
import mysql from '../img/mysql-icon.png';
// Framer Motion
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

// nodejs/ nextJS/ bootstrap / 

function IconList2() {
    const [element7, controls7] = useScroll();
    return (
        <motion.div variants={scrollReveal} ref={element7} animate={controls7} initial="hidden" className="icon-container">
            <div className="row">
                <div className="column4">
                    <div>
                        <img src={nextjs} alt="Just a NextJS icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={tailwind} alt="Just a Tailwind icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={bootstrap} alt="Just a BootStrap icon"></img>
                    </div>
                </div>
                <div className="column4">
                    <div>
                        <img src={mysql} alt="Just a MySQL icon"></img>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IconList2;