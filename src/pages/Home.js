import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const message = 'Hello, World!';

    useEffect(() => {
        if (index < message.length) {
            const timer = setTimeout(() => {
                setText((prev) => prev + message[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 100); 

            return () => clearTimeout(timer);
        }
    }, [index]); 

    return (
        <div id="homePage">
            <Link id="helloWorld">{text}</Link>
            <h1> My name is Isa Dominguez. I am a software engineer with a passion for people. I am fascinated by how people think, learn, and will ultimately interact with the products I develop. Click around to explore more about me and my work! </h1>
        </div>
    );
}

export default Home;

