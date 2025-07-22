import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <embed
            src="https://isadominguez314.github.io/isadominguez-website/WebsiteResume.pdf"
            type="application/pdf"
            style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
        />
    );
}

export default Resume;