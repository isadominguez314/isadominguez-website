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
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <h5> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </h5>

                        </div> :
                        <div className="inactiveProject"> <Link className="projectTitle"> Her Future Coalition </Link> </div>
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
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <p> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </p>

                        </div> :
                        <div className="inactiveProject"> <Link className="projectTitle"> Her Future Coalition </Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 3 ? 
                        <div className="activeProject"> 
                            <div>
                                <h1> <b> Her Future Coalition </b> </h1>
                            </div>
                            <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <p> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </p>

                        </div> :
                        <div> <Link className="projectTitle"> Her Future Coalition </Link> </div>
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
                                <h1> <b> Her Future Coalition </b> </h1>
                            </div>
                            <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <p> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </p>

                        </div> :
                        <div> <Link className="projectTitle"> Her Future Coalition </Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 5 ? 
                        <div className="activeProject"> 
                            <div>
                                <h1> <b> Her Future Coalition </b> </h1>
                            </div>
                            <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <p> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </p>

                        </div> :
                        <div> <Link className="projectTitle"> Her Future Coalition </Link> </div>
                    }
                    
                    </div>
                </div>
                <div class="projectCard" onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}>
                    <div> {hoveredCard === 6 ? 
                        <div className="activeProject"> 
                            <div>
                                <h1> <b> Her Future Coalition </b> </h1>
                            </div>
                            <div className="skillBar">
                                <h6 className="skill"> React </h6>
                                <h6 className="skill"> MongoDB </h6>
                                <h6 className="skill"> Node.js </h6>
                                <h6 className="skill"> Express </h6>
                                <h6 className="skill"> React </h6>
                                <a 
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='skill'
                                >
                                    <LaunchIcon/>
                                </a>
                            </div>
                            <p> This was awesome I really liked it ehis was awesome I really liked it etc his was awesome I really liked it etc his was awesome I really liked it etc </p>

                        </div> :
                        <div> <Link className="projectTitle"> Her Future Coalition </Link> </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Projects;