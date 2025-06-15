import React from "react";
import { Link } from "react-router-dom";
import StarBackground from '../component/StarBackground';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <StarBackground />
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Go to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
