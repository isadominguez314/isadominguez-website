import React from 'react';
import '../styles/Experience.css';
import LaunchIcon from '@mui/icons-material/Launch';
import CircleIcon from '@mui/icons-material/Circle';
import {Link} from 'react-router-dom';

function Experience () 
{
    return (
        <div id="experiencePage">
            <div className="experienceBox">
                <div className="experienceLeft">
                    <div className="experienceCircle">
                        <CircleIcon className="circleIcon" />
                    </div>
                    <div className="experienceLine"></div>
                </div>
                <div className="experienceContent">
                    <div className="experienceCard">
                        <div className="experienceTitle">
                            <div className="topLine">
                                <div>
                                   <Link className="experienceName"> McMaster-Carr </Link>
                                    <a 
                                        href="https://www.mcmaster.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> June 2024-August 2024</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Systems Intern </h2>
                                <h2> Elmhurst, IL </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="experienceBox">
                <div className="experienceLeft">
                    <div className="experienceCircle">
                        <CircleIcon className="circleIcon" />
                    </div>
                    <div className="experienceLine"></div>
                </div>
                <div className="experienceContent">
                    <div className="experienceCard">
                        <div className="experienceTitle">
                            <div className="topLine">
                                <div>
                                   <Link className="experienceName"> McMaster-Carr </Link>
                                    <a 
                                        href="https://www.mcmaster.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> June 2024-August 2024</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Systems Intern </h2>
                                <h2> Elmhurst, IL </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="experienceBox">
                <div className="experienceLeft">
                    <div className="experienceCircle">
                        <CircleIcon className="circleIcon" />
                    </div>
                    <div className="experienceLine"></div>
                </div>
                <div className="experienceContent">
                    <div className="experienceCard">
                        <div className="experienceTitle">
                            <div className="topLine">
                                <div>
                                   <Link className="experienceName"> McMaster-Carr </Link>
                                    <a 
                                        href="https://www.mcmaster.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> June 2024-August 2024</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Systems Intern </h2>
                                <h2> Elmhurst, IL </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                            <p> ★ Developed a full-stack web application to track and manage the company’s inventory using React, MongoDB, Node.js, and Express </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Experience;