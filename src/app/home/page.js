import React from 'react';
import Image from 'next/image';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/OttoProfile.png"
                    alt="Stefanus Brian Otto Hartanto"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-gray-800 shadow-lg"
                />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800">Stefanus Brian Otto Hartanto</h1>
            <p className="text-lg text-gray-600 mt-2">Fullstack Web Developer</p>
            <p className="text-md text-gray-500 mt-4 text-center max-w-2xl">
                Saya seorang pengembang web fullstack dengan keahlian dalam JavaScript, React, dan Next.js. 
                Saya membangun aplikasi web yang responsif dan berkinerja tinggi, menggabungkan keterampilan 
                pengembangan front-end dan back-end.
            </p>
        </div>
    );
};

export default Home;