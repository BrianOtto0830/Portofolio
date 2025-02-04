// src/app/layout.tsx
"use client"; // If you need client-side functionality, otherwise remove this

import React, { ReactNode } from 'react';
import Link from 'next/link';
import '../styles/styles.css'; // Import the CSS file here

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About Me</Link>
                        <Link href="/projects">Projects</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;