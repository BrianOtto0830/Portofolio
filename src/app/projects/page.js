import React from 'react';
import Card from '../../components/card';

const Projects = () => {
    const projectList = [
        { 
            title: 'Frontend Trend Era E-Commerce', 
            link: 'https://trend-era-e-commerce.vercel.app/', 
            description: 'Website e-commerce yang dibangun menggunakan React & Next.js dengan integrasi Stripe.',
            image: '/images/trend-era-frontend.png'
        },
        { 
            title: 'Backend Trend Era E-Commerce', 
            link: 'https://ka-bootcamp-back-end.vercel.app/', 
            description: 'Backend API untuk e-commerce, menggunakan Next.js API Routes dan Prisma sebagai ORM.',
            image: '/images/trend-era-backend.png'
        }
    ];

    return (
        <div className="min-h-screen py-20 px-8 bg-gray-100">
            <h1 className="text-center text-4xl font-bold mb-10">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projectList.map((project, index) => (
                    <Card 
                        key={index} 
                        title={project.title} 
                        link={project.link} 
                        description={project.description} 
                        image={project.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
