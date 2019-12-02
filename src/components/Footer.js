import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import config from '../utils/siteConfig'

const Footer = () => {
    return (
			<footer className="pt-8 px-8 pb-6 bg-secondary">
		    <div className="flex flex-col xl:flex-row lg:flex-row xl:justify-between lg:justify-between items-center text-white font-body text-sm">
          <p className="capitalize">Site built by <a href="https://tayanderson.com" target="_blank" rel="noopener noreferrer" className="text-white underline">Taylor Anderson</a></p>
          <p className="capitalize">&copy; 2019 {config.siteTitle} &mdash; <Link to="/privacy-policy/" className="underline">Terms & Privacy Policy</Link></p>
		    </div>
		</footer>
	)
}

export default Footer;
