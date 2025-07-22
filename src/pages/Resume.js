import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div id="resumeContainer">
            <embed
                src="https://isadominguez314.github.io/isadominguez-website/WebsiteResume.pdf"
                type="application/pdf"
                style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
            />
        </div>
    );
}

export default Resume;