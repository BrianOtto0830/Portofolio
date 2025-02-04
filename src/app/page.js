"use client"; // Add this directive to mark the file as a client component

import { useEffect } from 'react';
import { redirect } from 'next/navigation'; // Use redirect from next/navigation

const RedirectToHome = () => {
    useEffect(() => {
        redirect('/home'); // Redirect to the Home page
    }, []);

    return null; // Return null since we're redirecting
};

export default RedirectToHome;