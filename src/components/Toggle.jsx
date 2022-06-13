import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.div layout className="dropdown">
                <FontAwesomeIcon className="icontoggle" size="2x" icon={toggle ? faMinus : faPlus} />
                <motion.h4 layout>{title}</motion.h4>
            </motion.div>
            {toggle ? children : ''}
            <motion.div layout className="faq-line"></motion.div>
        </motion.div>
    );
};

export default Toggle;