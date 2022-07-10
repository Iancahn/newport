import React, { useState } from 'react';
import { ProjectState } from '../projectState';

// Test
import html from '../img/html-icon.png';
import css from '../img/css-icon.png';
import javascript from '../img/javascript-icon.png';
import react from '../img/react-icon.png';
import nextJs from '../img/nextjs-icon.png';
import mySql from '../img/mysql-icon.png';
import defaultStack from '../img/default-stack.png';

// const skillLogos = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXTJS", "MYSQL",];

// // get Skill Logos
// function GetSkillLogos() {

//     return (
//         <div>
//             {skillLogos.map((skillLogo) => {
//                 return <h1>{skillLogo}</h1>
//             })}
//         </div>
//     )

// }

// export default GetSkillLogos;

    // get Skill Logo Images case switch
    // Get SkillLogos images
    // const getPlatform = (skillLogo) => {
    //     switch (skillLogo) {
    //         case "HTML":
    //             return html;
    //         case "CSS":
    //             return css;
    //         case "JAVASCRIPT":
    //             return javascript;
    //         case "REACT":
    //             return react;
    //         case "NEXTJS":
    //             return nextJs;
    //         case "MYSQL":
    //             return mySql;
    //         default:
    //             return defaultStack;
    //     }
    // }