import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import siteLogoWhite from '../images/dd-logo2-white.png';
import config from '../utils/siteConfig'

const Footer = () => {
    return (
			<footer className="footer">
		    <div className="container">
		        <div className="content has-text-centered">
		            <div className="footer-brand">
		                <Link to="/">
											<img src={siteLogoWhite} alt="Drink Designer" style={{ width: '200px' }} />
		                </Link>
		            </div>
		            <p className="site-footer__copyright is-size-7">
		                &copy; {config.siteTitle}  All Rights Reserved • <Link to="/privacy-policy/">Privacy Policy</Link> • Site built by <a href="https://tayanderson.com" target="_blank" rel="noopener noreferrer">Taylor Anderson</a>
		            </p>
		        </div>
		    </div>
		</footer>
	)
}

export default Footer;
