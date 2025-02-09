import React from 'react';

const Card = ({ title, description, link }) => {
    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 font-semibold hover:underline"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default Card;
