import React from 'react';
import Card from '../../components/card';

const Projects = () => {
    const projectList = [
        { title: 'Frontend Trend Era E-Commerce', link: 'https://trend-era-e-commerce.vercel.app/' },
        { title: 'Backend Trend Era E-Commerce', link: 'https://ka-bootcamp-back-end.vercel.app/' },
        // Add more projects as needed
    ];

    return (
        <div>
            <h1>My Projects</h1>
            <div className="project-cards">
                {projectList.map((project, index) => (
                    <Card key={index} title={project.title} link={project.link} />
                ))}
            </div>
        </div>
    );
};

export default Projects;