import React from 'react';
import {useState} from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import '../styles/Projects.css';
import {Link} from 'react-router-dom';

function Projects () 
{
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div>
            <div class="projectRow">
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 1 ? 
                        <div className="activeProject"> 
                            <div>
                                <h1> <b> Her Future Coalition </b> </h1>
                            </div>
                            <div className="skillBar">
                                <h6 className="skill"> ReactJS </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <a 
                                    href="https://github.com/ChangePlusPlusVandy/hfc-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <h5> My team and I developed a data management platform for Her Future Coalition. HFC is a nonprofit based in India that provides educational training and resources to 500+ young women who are victims of gender based violence. </h5>

                        </div> :
                        <div className="inactiveProject"> <Link className="projectTitle">Her Future Coalition</Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 2 ? 
                        <div className="activeProject"> 
                        <div>
                            <h1> <b> Lyric Game </b> </h1>
                        </div>
                        <div className="skillBar">
                            <h6 className="skill"> ReactJS </h6>
                            <h6 className="skill"> Node.js </h6>
                            <h6 className="skill"> API </h6>
                            <h6 className="skill"> Data Cleaning </h6>
                            <a 
                                href="https://github.com/isadominguez314/taylor-game"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='skill'
                            >
                                <LaunchIcon/>
                            </a>
                        </div>
                        <h5> I created a game where the player uses lyrics and album information to guess the Taylor Swift song. There are multiple game modes, opportunities for hints, and a clean interface that makes this my favorite game I've created.</h5>

                    </div> :
                    <div className="inactiveProject"> <Link className="projectTitle">Lyric Game</Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 3 ? 
                        <div className="activeProject"> 
                        <div>
                            <h1> <b> Digits Game </b> </h1>
                        </div>
                        <div className="skillBar">
                            <h6 className="skill"> Python </h6>
                            <h6 className="skill"> OOP </h6>
                            <h6 className="skill"> Game Design </h6>
                            <a 
                                href="https://github.com/isadominguez314/digits-game"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='skill'
                            >
                                <LaunchIcon/>
                            </a>
                        </div>
                        <h5> This game is inspired by my favorite NYT Game, Digits, which was archived in August of 2023. I wanted a simple mental math game to play as many rounds as I wanted so I made this using Python. It mimics the original Digits but offers 10 difficulty levels for users to choose from. </h5>

                    </div> :
                    <div className="inactiveProject"> 
                        <Link className="projectTitle"> Digits Game </Link> 
                    </div>
                    }
                    
                    </div>
                </div>
            </div>
            <div class="projectRow">
            <div class="projectCard" onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 4 ? 
                        <div className="activeProject"> 
                        <div>
                            <h1> <b> Personal Website </b> </h1>
                        </div>
                        <div className="skillBar">
                            <h6 className="skill"> ReactJS </h6>
                            <h6 className="skill"> UI/UX </h6>
                            <h6 className="skill"> GitHub Pages</h6>
                            <a 
                                href="https://github.com/isadominguez314/isadominguez-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='skill'
                            >
                                <LaunchIcon/>
                            </a>
                        </div>
                        <h5> This is the website you are looking at right now, welcome! I created this as a way to more creatively express myself and my experiences. I thought this was a fun and representative way of sharing beyond just my resume or my GitHub. </h5>

                    </div> :
                    <div className="inactiveProject"> <Link className="projectTitle"> Personal Website </Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 5 ? 
                        <div className="activeProject"> 
                        <div>
                            <h1> <b> Flashcard App </b> </h1>
                        </div>
                        <div className="skillBar">
                            <h6 className="skill"> ReactJS </h6>
                            <h6 className="skill"> Node.js </h6>
                            <h6 className="skill"> MongoDB </h6>
                            <h6 className="skill"> Express </h6>
                            <a 
                                href="https://github.com/isadominguez314/metacognitive-flashcards"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='skill'
                            >
                                <LaunchIcon/>
                            </a>
                        </div>
                        <h5> This is a metacognitive flashcards app that allows the user to study smart. While studying, the user marks how important the material is and how well they know it. High importance and low confidence cards will be studied more.</h5>

                    </div> :
                    <div className="inactiveProject"> <Link className="projectTitle"> Flashcard App </Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 6 ? 
                        <div className="activeProject"> 
                        <div>
                            <h1> <b> Kappa Theta Pi </b> </h1>
                        </div>
                        <div className="skillBar">
                            <h6 className="skill"> Mentorship </h6>
                            <h6 className="skill"> Web Development </h6>
                            <h6 className="skill"> Collaboration </h6>
                            <a 
                                href="https://www.kappathetapi.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='skill'
                            >
                                <LaunchIcon/>
                            </a>
                        </div>
                        <h5> At Vanderbilt, I am part of the founding class of Kappa Theta Pi, a technology fraternity. Within KTP, I have signed up to mentor multiple web development projects for incoming members who are new to software engineering.  </h5>

                    </div> :
                    <div className="inactiveProject"> <Link className="projectTitle"> Kappa Theta Pi </Link> </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Projects;