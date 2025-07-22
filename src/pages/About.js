import React from 'react';
import '../styles/About.css';
import {Link} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About () 
{
    return (
        <div id="aboutPage">
            <Link className="aboutHeading"> About Me </Link>
            <div style={{ '--animation-delay': '0s' }}>
                <h2 className="subheading"> Things I'm Passionate About </h2>
                <h4> I am an undergraduate junior at Vanderbilt University. At Vanderbilt, I am triple majoring in Computer Science, Cognitive Studies, and Applied Math with a minor in Data Science. 
                    These disciplines may seem a bit all over the place, but I absolutely love exploring the intersections of these fields. My current research project in the Advancing Learning Lab integrates all four of these fields together! The project involves analyzing trends in how students learn math in a personalized digital learning platform. 
                    This has been one of my favorite projects that I've worked on and my dream career would involve working on the development of educational technology in some capacity. 
                    I also am a firm believer that I have something to learn from everyone, so my dream career definitely involves working closely with other people. I've worked as a teaching assistant, summer camp director, and tutor in the past and I've loved every second of it!
                </h4>
            </div>
            <div style={{ '--animation-delay': '1s' }}>
                <h2 className="subheading"> Places I'm Passionate About </h2>
                <h4 > I grew up in the Chicagoland area where I loved spending time at the lake eating deep dish pizza :) 
                    For school, I moved to Nashville and I fell in love with the live music and beautiful scenery. I spent a semester abroad in Madrid and had the best time exploring the city, practicing my Spanish, and frolicking around Europe.
                    As much as I love each of these cities, I have a soft spot in my heart for Northern California. My family all lives out there and I am obsessed with the people, the weather, and the Redwoods. 
                    This summer, I am moving to Seattle and I am excited to explore all of the hikes and outdoor activities that the Pacific Northwest has to offer!
                 </h4>
            </div>
            <div style={{ '--animation-delay': '2s' }}>
                <h2 className="subheading"> Exploring More About My Passions </h2>
                <h4> Click around on this website to explore more about the work I've done, projects I've made, and things I like to do in my free time! If you have any questions or want to learn more, contact me through any of the accounts below:   </h4>
                <a 
                    href="mailto:isadominguez314@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contactIcon'
                >
                    <EmailIcon style={{ fontSize: 50 }}/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/isa-dominguez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contactIcon'
                >
                    <LinkedInIcon style={{ fontSize: 50 }}/>
                </a>
                <a 
                    href="https://github.com/isadominguez314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='contactIcon'
                >
                    <GitHubIcon style={{ fontSize: 50 }}/>
                </a>
            </div>
        </div>
    )   
}

export default About;