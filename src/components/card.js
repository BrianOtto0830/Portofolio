import React from 'react';

const card = ({ title, link }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default card;