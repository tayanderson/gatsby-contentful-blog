import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import config from '../utils/siteConfig';

const Footer = () => {
    return (
			<footer className="bg-white">
		    <div className="container mx-auto p-4 px-8 md:py-6 md:px-8">
          <div className="text-gray-500 font-body text-base md:text-sm flex flex-col md:flex-row justify-between items-center">
            <span className="capitalize">&copy; {new Date().getFullYear()} {config.siteTitle}</span>
            <div className="text-center">
              <Link to="/privacy-policy/" className="hover:text-black">Terms & Privacy Policy. </Link>
              <span className="whitespace-pre">Site by <a href="https://tayanderson.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">Taylor Anderson.</a></span>
            </div>
          </div>
        </div>
		</footer>
	)
}

export default Footer;
