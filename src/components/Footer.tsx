/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/logos.jpg"  // Corrected image path
              alt="Nimra Dynamic Blog Logo"  // More descriptive alt text
              className="w-32 mb-4"
            />
            <p className="text-gray-400 text-center md:text-left">
              Bringing the best web development tips, tutorials, and insights for developers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebookF} size="lg" /> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="lg" /> {/* Twitter Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <FontAwesomeIcon icon={faYoutube} size="lg" /> {/* YouTube Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" /> {/* Instagram Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Nimra Talha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
