import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="column-left">
                <h1>Welcome to Home</h1>
                <p>This is the home page content.</p>
            </div>
            <div className="column-right">
                <h1>Additional Content</h1>
                <p>Here's some more content in the second column.</p>
            </div>
        </div>
    );
}

export default Home;
