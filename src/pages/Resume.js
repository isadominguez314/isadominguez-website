import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div id="resumeContainer">
            <embed src="/WebsiteResume.pdf" type="application/pdf" style={{ transform: 'scale(1)', transformOrigin: 'top left' }} />
        </div>
    );
}

export default Resume;