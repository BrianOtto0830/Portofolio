import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-8 sm:px-16 lg:px-32 min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                <Image
                    src="/images/OttoProfile.png"
                    alt="Stefanus Brian Otto Hartanto"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-gray-800 shadow-lg"
                />
                    <h1 className="text-4xl font-bold mb-4">Stefanus Brian Otto Hartanto</h1>
                    <p className="text-xl mb-4">Fullstack Web Developer | React | Next.js | JavaScript</p>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Saya seorang pengembang web dengan pengalaman dalam membangun aplikasi web responsif dan
                        berkinerja tinggi, berfokus pada solusi yang user-friendly dan berkualitas tinggi.
                    </p>
                </div>

                {/* About Section */}
                <div className="lg:flex justify-between items-center space-x-10 mb-16">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl font-semibold mb-4">Tentang Saya</h2>
                        <p className="text-lg mb-6">
                            Sebagai pengembang web, saya memiliki pengalaman luas dalam membangun aplikasi web dengan
                            menggunakan JavaScript, React, Next.js, dan banyak teknologi backend seperti Node.js dan
                            PostgreSQL. Saya selalu berfokus pada penyediaan solusi yang efisien dan berbasis data.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4">Keterampilan</h3>
                        <ul className="space-y-3">
                            <li>JavaScript / ES6+</li>
                            <li>React.js & Next.js</li>
                            <li>Node.js & Express.js</li>
                            <li>PostgreSQL & MongoDB</li>
                            <li>HTML & CSS (Tailwind CSS, SCSS)</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-lg mb-6">
                        Jika Anda tertarik untuk bekerja sama atau berdiskusi lebih lanjut tentang proyek atau peluang
                        kerja, saya akan sangat senang untuk berbicara lebih lanjut.
                    </p>
                    <a
                        href="mailto:your-email@example.com"
                        className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Hubungi Saya
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
