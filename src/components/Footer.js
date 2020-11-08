import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import config from '../utils/siteConfig';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
			<footer className="px-8 bg-secondary">
		    <div className="pt-10 pb-8 flex flex-row justify-between items-center text-cream font-body text-base md:text-lg">
          <div className="flex flex-col sm:flex-row">
            <span className="capitalize mr-12">&copy; {new Date().getFullYear()} {config.siteTitle}</span>
            <Link to="/privacy-policy/">Terms & Privacy Policy</Link>
          </div>
          <a href="https://instagram.com/thedrinkdesigner"><FaInstagram size="2em"/></a>
		    </div>
        <div className="border-t border-darkgrey py-4 text-cream">Website Design & Development by <a href="https://tayanderson.com" target="_blank" rel="noopener noreferrer" className="underline">Taylor Anderson</a></div>
		</footer>
	)
}

export default Footer;
