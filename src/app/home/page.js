import React from 'react';
import Image from 'next/image';
import Card from '../../components/card';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            {/* Header */}
            <header className="text-center py-16">
                <h1 className="text-5xl font-bold mb-2">Stefanus Brian Otto Hartanto</h1>
                <p className="text-xl mb-6">Fullstack Web Developer | React | Next.js | JavaScript</p>
                <a href="#about" className="bg-teal-500 py-2 px-6 rounded-full text-white text-lg transition duration-300 hover:bg-teal-600">Learn More</a>
            </header>

            {/* About Me Section */}
            <section id="about" className="py-20 px-8 text-center bg-white text-gray-900">
                <h2 className="text-3xl font-semibold mb-6">About Me</h2>
                <div className="flex justify-center items-center flex-wrap gap-10">
                    <div className="w-full sm:w-1/2 lg:w-1/3 ">
                        <Image
                            src="/images/OttoProfile.png"
                            alt="Stefanus Brian Otto Hartanto"
                            className="rounded-full border-4 border-gray-800 shadow-lg"
                            width={160} // Atur lebar gambar
                            height={160} // Atur tinggi gambar
                        />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/3">
                        <p className="text-lg opacity-80 max-w-3xl mx-auto">
                            Saya seorang pengembang web berpengalaman dengan keterampilan dalam teknologi modern seperti JavaScript, React, dan Next.js. Saya fokus pada pembuatan aplikasi web yang responsif dan berkinerja tinggi. Selain itu, saya berkomitmen untuk memberikan solusi kreatif dan efisien dalam setiap proyek.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-100 text-gray-900">
                <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
                        <p className="text-gray-700">Pengalaman luas dalam JavaScript dan ES6+ untuk membangun aplikasi web dinamis.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">React.js</h3>
                        <p className="text-gray-700">Keahlian dalam React.js untuk membangun antarmuka pengguna modern dan responsif.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Node.js</h3>
                        <p className="text-gray-700">Pengalaman dalam membangun backend dengan Node.js dan Express.js untuk aplikasi web penuh.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-8 text-center">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Card 
                        title="Trend Era"
                        description="Website e-commerce yang dibangun menggunakan React & Next.js"
                        link="https://trend-era-e-commerce.vercel.app/"
                    />
                    <Card 
                        title="Backend Trend Era"
                        description="Sistem backend API untuk e-commerce Trend Era menggunakan Next.js API Routes dan Prisma sebagai ORM."
                        link="https://ka-bootcamp-back-end.vercel.app/"
                    />
                    <Card 
                        title="My CV"
                        description="Website portofolio yang dibangun menggunakan React dan Next.js."
                        link="https://github.com/BrianOtto0830/Portofolio"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-teal-500 text-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
                <p className="mb-6">Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, silakan hubungi saya.</p>
                <a href="mailto:your-email@example.com" className="bg-white text-teal-500 py-2 px-6 rounded-full text-lg transition duration-300 hover:bg-gray-200">Email Me</a>
            </section>
        </div>
    );
};

export default Home;
