import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import IconList from '../components/IconList';
import IconList2 from '../components/IconList2';
import Footer from '../components/Footer';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <IconList />
            <IconList2 />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
            <Footer />
        </motion.div>

    )
}

export default AboutUs;