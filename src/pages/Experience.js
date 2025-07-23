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
                                   <Link className="experienceName"> Google </Link>
                                    <a 
                                        href="https://about.google//"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> May 2025-August 2025</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Software Engineering Intern </h2>
                                <h2> Seattle, WA </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Kubernetes </h6>
                                <h6 className="skill"> GKE </h6>
                                <h6 className="skill"> Golang </h6>
                                <h6 className="skill"> Docker </h6>
                                <h6 className="skill"> Kind </h6>
                                <h6 className="skill"> CI/CD </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Implemented WorkloadAllowlist autogeneration feature for customer driven allowlisting in Google Kubernetes Engine Autpilot </p>
                            <p> ★ Streamlined the WorkloadAllowlist creation process to improve usability and significantly reduce the time customers spend on privileged workload deployment </p>
                            <p> ★ Created video demonstrations for customers to better understand the allowlisting process and how to use autogeneration </p>
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
                                        href="https://www.mcmaster.com/careers/culture"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> June 2024 - August 2024</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Systems Intern </h2>
                                <h2> Elmhurst, IL </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> Typescript </h6>
                                <h6 className="skill"> C# </h6>
                                <h6 className="skill"> SQL </h6>
                                <h6 className="skill"> Data Visualization </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Sole developer of a full-stack internal web application that allows employees to filter customer search data and trends</p>
                            <p> ★ Integrated a ReactTS frontend with a C# backend to display results of 12 SQL stored procedures based on user input </p>
                            <p> ★ Reduced the organization's reliance on a data source with a known limited lifespan and preserved production system integrity</p>
                            <p> ★ Collaborated with coworkers across departments to best understand the goals and use cases of the dashboard</p>
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
                                   <Link className="experienceName"> Change++ </Link>
                                    <a 
                                        href="https://changeplusplus.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> August 2023 - Present </h2>
                            </div>
                            <div className="bottomLine">
                                <h2> President (2024-2025), VP Marketing (2023-2024) </h2>
                                <h2> Nashville, TN </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Leadership </h6>
                                <h6 className="skill"> Collaboration </h6>
                                <h6 className="skill"> Marketing </h6>
                                <h6 className="skill"> Organization </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Assess 200+ applications through technical and behavioral measures to lead the recruitment of 50 developers, 16 managers, 5 designers, and 8 mentors </p>
                            <p> ★ Recruit and manage an executive board of 15 members through weekly board, presidents, and subcommittee meetings </p>
                            <p> ★ Increased number of applications by 57% through extensive marketing of the club, resources, and informational sessions </p>
                            <p> ★ Maintain consistent year long communication with managers and mentors</p>
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
                                   <Link className="experienceName"> Vanderbilt University </Link>
                                    <a 
                                        href="https://www.vanderbilt.edu/laprogram/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> August 2025 - Present </h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Course Assistant for MATH 1200: Single Variable Calculus I </h2>
                                <h2> Nashville, TN </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Math Education </h6>
                                <h6 className="skill"> Pedagogy </h6>
                                <h6 className="skill"> Problem Solving</h6>
                                <h6 className="skill"> Community Building </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Colead 2 weekly discussion sections for 24 total students</p>
                            <p> ★ Build personal relationships with students to cater to their unique learning styles and needs</p>
                            <p> ★ Engage in weekly content meetings with the course assistant team as well as a weekly STEM pedagogy seminar</p>
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
                                   <Link className="experienceName"> Advancing Learning Lab </Link>
                                    <a 
                                        href="https://lab.vanderbilt.edu/advancinglearning/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> August 2024 - Present </h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Research Assistant </h2>
                                <h2> Nashville, TN </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Interdiciplinary Research </h6>
                                <h6 className="skill"> Metacognition </h6>
                                <h6 className="skill"> R </h6>
                                <h6 className="skill"> Data Cleaning </h6>
                                <h6 className="skill"> Data Analysis </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Develop metacognitive training interventions to integrate into Carnegie Learning's 6th-8th grade MATHia curriculum</p>
                            <p> ★ Conduct data cleaning and analysis in R on 16,000+ rows of pilot data to explore how metacognitive intervention affects performance </p>
                            <p> ★ Participate in weekly collaborative meetings with fellow researchers and the Carnegie Learning team to dicuss technical implementation of the intervention</p>
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
                                   <Link className="experienceName"> Vanderbilt University </Link>
                                    <a 
                                        href="https://engineering.vanderbilt.edu/departments/computer-science/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> August 2023 - December 2023 </h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Grader for CS 2201: Data Structures </h2>
                                <h2> Nashville, TN </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Java </h6>
                                <h6 className="skill"> Debugging </h6>
                                <h6 className="skill"> Computer Science Education</h6>
                                <h6 className="skill"> Problem Solving </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Hosted 4 weekly office hours to help students think about, efficiently implement, and debug their code</p>
                            <p > ★ Established rapport and trust with students in order to build their confidence and comfort in the software development process </p>
                            <p> ★ Graded and debugged weekly programming assignments and worked collaboratively with other graders to assess midterms and final exam</p>
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
                                   <Link className="experienceName"> Park District of Highland Park </Link>
                                    <a 
                                        href="https://www.pdhp.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> Summer 2023 & 2024 </h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Camp Director (2024), Camp Counselor (2023) </h2>
                                <h2> Highland Park, IL </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Leadership </h6>
                                <h6 className="skill"> Conflict Resolution </h6>
                                <h6 className="skill"> Creativity </h6>
                                <h6 className="skill"> Organization </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Responsible for 36 girls ages 7-11 and 5 staff members for 6 hours each weekday</p>
                            <p > ★ Entertained campers with artistic, athletic, and educational activities while upholding a supportive environment for campers and counselors to understand their value in our community </p>
                            <p> ★ Supported campers and staff after a local mass shooting and helped community readjust to life with normalcy</p>
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
                                   <Link className="experienceName"> Vanderbilt University </Link>
                                    <a 
                                        href="https://admissions.vanderbilt.edu/academics/fact-sheet/?program=1007"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experienceLaunch"
                                    >
                                        <LaunchIcon/>
                                    </a>
                                </div>
                                <h2> January 2023 - May 2023</h2>
                            </div>
                            <div className="bottomLine">
                                <h2> Teaching Assistant PSY-PC 1205: Minds, Brains, Contexts, Cultures </h2>
                                <h2> Nashville, TN </h2>
                            </div>
                        </div>
                        <div className="skillBar">
                                <h6 className="skill"> Teaching </h6>
                                <h6 className="skill"> Communication </h6>
                                <h6 className="skill"> Grading </h6>
                                <h6 className="skill"> Leadership </h6>
                        </div>
                        <div className="experienceDescription">
                            <p > ★ Freshman invited to serve as the sole TA for the Cognitive Studies major introductory course</p>
                            <p> ★ Hosted weekly office hours, led monthly review sessions, and collaborated with professor during weekly 1-on-1 content meetings </p>
                            <p> ★ Assessed student papers and exams, tracked attendance and participation, served as the first point of contact for students seeking help </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Experience;